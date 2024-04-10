/* Form */
export type FormData = {
    firstname?: string;
    lastname?: string;
    email?: string;
    subject?: string;
    choices?: (string | undefined)[];
    question?: string;
    message?: string;
};

export type UploadFormData = {
    firstname?: string;
    lastname?: string;
    email?: string;
    resume?: FileList | string;
    coverletter?: FileList | string;
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
