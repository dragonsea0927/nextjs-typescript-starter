import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import {
    FieldError,
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

export interface Radio extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
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
