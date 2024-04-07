import { CSSProperties, ReactNode } from 'react';

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

export type NavigationProps = {
    routes: NavigationRoutes;
};

export type MobileNavigationProps = {
    routes: NavigationRoutes;
};

export type NavigationRoutes = NavigationRoute[];

export type NavigationRoute = {
    href: string;
    title: string;
};

/* Layout */
export type Layout = {
    children: ReactNode;
    routes: NavigationRoutes;
};

/* Footer */
export type FooterProps = {
    routes: NavigationRoutes;
};
