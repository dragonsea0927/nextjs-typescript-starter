import {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';
import {
    FieldError,
    FieldValues,
    UseControllerReturn,
    UseFormRegister,
    UseFormRegisterReturn,
} from 'react-hook-form';

/* Elements */
export interface Input extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
}

export interface FileInput extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
    controller: UseControllerReturn;
}

export interface Checkbox extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
}

export type CheckboxList = {
    title: string;
    items: string[];
    className: string;
    name: string;
    wrapperClassName?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldError | undefined;
};

export interface Radio extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
}

export interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
    defaultValue: string;
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    options: string[];
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
}

export interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
}
