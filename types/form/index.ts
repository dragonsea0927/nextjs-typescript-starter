/* Form */
export type FormData = {
    firstname?: string;
    lastname?: string;
    email?: string;
    subject?: string;
    choices?: (string | undefined)[] | undefined;
    question?: string;
    message?: string;
};

export type UploadFormData = {
    firstname?: string;
    lastname?: string;
    email?: string;
    resume?: File | string;
    coverletter?: File | string;
    message?: string;
};

export type Labels = {
    [key: string]: string;
};

export type Fields = {
    [key: string]: string;
};

export type FieldsValidationErrors = {
    [key: string]: string;
};
