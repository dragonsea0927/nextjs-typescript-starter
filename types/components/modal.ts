import { ReactNode } from 'react';

/* Modal */
export type Modal = {
    children: ReactNode;
    showModal: boolean;
    setModal: (state: boolean) => void;
};

/* Demo Modal */
export type DemoModal = {
    title: string;
    content: string;
    showDemoModal: boolean;
    setModal: (state: boolean) => void;
};
