/* Meta data */
export type MetaDataProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
};

/* Navigation */
export type NavItemProps = {
    href: string;
    title: string;
    onClick?: () => void;
    className: string;
};
