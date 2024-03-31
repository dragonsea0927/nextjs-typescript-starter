import {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';
import {
    FieldError,
    Merge,
    UseControllerReturn,
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
    className?: string;
    htmlFor: string;
    register: UseFormRegisterReturn;
    errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

export interface Radio extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
}

export type RadioList = {
    title: string;
    items: string[];
    className?: string;
    htmlFor: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
};

export interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
    defaultValue?: string;
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
