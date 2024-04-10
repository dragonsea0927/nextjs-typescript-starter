import { UploadFormData } from '@/types/form';
import { object, string, mixed, addMethod, ObjectSchema } from 'yup';
import formidable from 'formidable';

const getFormSchema = () => {
    /* Override the email method, if email isn't required we need to add excludeEmptyString: true */
    addMethod(string, 'email', function validateEmail(message: string) {
        return this.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message,
            name: 'email',
        });
    });

    const schema: ObjectSchema<UploadFormData> = object({
        firstname: string().required('This field is required'),
        lastname: string().required('This field is required'),
        email: string()
            .required('This field is required')
            .email('Invalid email address'),
        resume: mixed<FileList & formidable.File>()
            .test('required', 'This field is required', (files) =>
                files ? true : false,
            )
            .test(
                'fileType',
                'Unauthorized format, only jpeg, jpg, png, doc, docx and pdf are valid',
                (files) =>
                    !files ||
                    new RegExp(/[^\s]+(.*?).(jpe?g|png|docx?|pdf)$/i).test(
                        files[0]?.name || (files.originalFilename as string),
                    ),
            )
            .test(
                'fileSize',
                'Max file size 4MB exceeded',
                (files) =>
                    !files || (files[0]?.size || files.size) <= 4 * 1024 * 1024,
            ),
        coverletter: mixed<FileList & formidable.File>()
            .test(
                'fileType',
                'Unauthorized format, only doc, docx and pdf are valid',
                (files) =>
                    !files ||
                    new RegExp(/[^\s]+(.*?).(docx?|pdf)$/i).test(
                        files[0]?.name || (files.originalFilename as string),
                    ),
            )
            .test(
                'fileSize',
                'Max file size 4MB exceeded',
                (files) =>
                    !files || (files[0]?.size || files.size) <= 4 * 1024 * 1024,
            ),
        message: string().required('This field is required'),
    });

    return schema;
};

export const uploadSchema = getFormSchema();
