import { UploadFormData } from '@/types/form';
import { object, string, mixed, addMethod, ObjectSchema } from 'yup';

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
        resume: mixed<File>().test(
            'required',
            'This field is required',
            (files) => (files ? true : false),
        ),
        coverletter: mixed<File>(),
        message: string().required('This field is required'),
    });

    return schema;
};

export const uploadSchema = getFormSchema();
