import { HTMLAttributes, ReactNode } from 'react';
import { AnimationProperties } from '../animations/properties';

/* Accordion props */
export type AccordionProps = {
    children: ReactNode;
    allowMultiple?: boolean;
};

/* Accordion item */
export interface HeadingTag extends HTMLAttributes<HTMLHeadingElement> {
    headingLevel: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export type AccordionItemHeading = {
    header: string;
    headingTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headingClassName?: string;
    buttonId: string;
    panelId: string;
    expanded: boolean;
    toggle: (expanded: boolean) => void;
};

export type AccordionItem = {
    children: ReactNode;
    header: string;
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headingClassName?: string;
    id: number;
    initialExpanded?: boolean;
} & AnimationProperties;
