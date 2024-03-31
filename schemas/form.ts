import { FormData } from '@/types/form';
import { object, string, addMethod, ObjectSchema, array } from 'yup';
// import { object, string, addMethod, ObjectSchema } from 'yup';

const getFormSchema = () => {
    /* Override the email method, if email isn't required we need to add excludeEmptyString: true */
    addMethod(string, 'email', function validateEmail(message: string) {
        return this.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message,
            name: 'email',
        });
    });

    const schema: ObjectSchema<FormData> = object({
        firstname: string().required('This field is required'),
        lastname: string().required('This field is required'),
        email: string()
            .required('This field is required')
            .email('Invalid email address'),
        subject: string().required('This field is required'),
        choices: array()
            .of(string())
            .min(1, 'Please select one of these choices'),
        question: string().required('Please select one of these answers'),
        message: string().required('This field is required'),
    });

    return schema;
};

export const formSchema = getFormSchema();
