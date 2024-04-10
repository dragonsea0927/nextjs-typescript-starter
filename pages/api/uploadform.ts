import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, File, Files } from 'formidable';
import Email from '@/utils/email';
import { Writable } from 'stream';
import { getEmailTemplateFile } from '@/utils/template';
import { ValidationError } from 'yup';
import { uploadSchema } from '@/schemas/uploadForm';
import { validateRecaptcha } from '@/utils/recaptcha';
import { FieldsValidationErrors } from '@/types/form';
import VolatileFile from 'formidable/VolatileFile';
import { Attachment } from '@/types/form/email';

/**
 * Config
 *
 * https://nextjs.org/docs/api-routes/request-helpers
 * https://github.com/node-formidable/formidable#options
 */
export const config = {
    api: {
        bodyParser: false,
    },
};

const formidableConfig: formidable.Options = {
    keepExtensions: true,
};

/**
 * Helpers
 *
 * https://github.com/node-formidable/formidable
 */
function formidablePromise(
    req: NextApiRequest,
    opts: formidable.Options,
): Promise<{
    fields: Fields;
    files: Files;
}> {
    return new Promise((resolve, reject) => {
        const form = formidable(opts);

        form.parse(req, (err, fields, files) => {
            if (err) {
                return reject(err);
            }

            return resolve({ fields, files });
        });
    });
}

const fileConsumer = (
    file: VolatileFile | undefined,
    filesData: { [key: string]: Buffer },
) => {
    const chunks: Uint8Array[] = [];

    const writable = new Writable({
        write(chunk, _enc, next) {
            chunks.push(chunk);

            next();
        },
        final(cb) {
            const buffer = Buffer.concat(chunks);
            const fileJson = file?.toJSON();
            filesData[fileJson?.originalFilename ?? ''] = buffer;

            cb();
        },
    });

    return writable;
};

/**
 * Handler
 *
 * https://nextjs.org/docs/api-routes/introduction
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method not allowed');
    }

    try {
        const filesData: { [key: string]: Buffer } = {};

        /* Parses form data */
        const { fields, files } = await formidablePromise(req, {
            ...formidableConfig,
            /* Consumes this, otherwise formidable tries to save the file to disk */
            fileWriteStreamHandler: (file) => fileConsumer(file, filesData),
        });

        /* Format fields */
        const formatFields = Object.entries(fields).reduce(
            (obj: { [key: string]: string }, [key, value]) => {
                obj[key] = value?.[0] ?? '';
                return obj;
            },
            {},
        );

        /* Format files */
        const formatFiles = Object.entries(files).reduce(
            (obj: { [key: string]: File | undefined }, [key, value]) => {
                obj[key] = value?.[0];
                return obj;
            },
            {},
        );

        /* Destructures fields */
        const { recaptchaToken, labels, ...formFields } = formatFields;

        /* Validation */
        await uploadSchema.validate(
            { ...formFields, ...formatFiles },
            { abortEarly: false },
        );

        /* Builds attachments */
        const attachments: Attachment[] = [];

        Object.entries(filesData).forEach(([key, value]) => {
            attachments.push({
                content: value.toString('base64'),
                filename: key,
            });
        });

        /* Recaptcha */
        const validReCaptcha = await validateRecaptcha(recaptchaToken, res);

        if (validReCaptcha)
            /* Sends email */
            try {
                const emailTemplate = await getEmailTemplateFile(
                    '/templates/email.html',
                    res,
                );
                await new Email(
                    emailTemplate as string,
                    'New form',
                    JSON.parse(labels),
                    formFields,
                    attachments,
                ).send();
                return res.status(201).json({
                    data: {
                        formFields,
                        attachments,
                    },
                    message:
                        'Thank you, your message has been sent successfully.',
                });
            } catch (err) {
                return res.status(500).json({
                    data: null,
                    message: 'An error occurred while sending the email',
                });
            }
    } catch (err) {
        /* Yup validation */
        if (err instanceof ValidationError) {
            const validationErrors: FieldsValidationErrors = {};

            err.inner.forEach((error) => {
                if (error.path && !validationErrors[error.path])
                    validationErrors[error.path] = error.errors[0];
            });

            return res
                .status(400)
                .json({ data: null, errors: validationErrors });
        }

        /* Global server error */
        return res
            .status(500)
            .json({ data: null, message: 'Internal Server Error' });
    }
}
