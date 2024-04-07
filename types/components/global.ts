import { CSSProperties } from 'react';

/* Meta data */
export type MetaDataProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
};

/* Navigation */
export type TogglerProps = {
    open: boolean;
    toggle: () => void;
};

export type NavItemProps = {
    href: string;
    title: string;
    onClick?: () => void;
    className: string;
    style?: CSSProperties;
};
