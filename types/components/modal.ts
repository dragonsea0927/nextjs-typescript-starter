import { ReactNode } from 'react';

/* Modal */
export type Modal = {
    children: ReactNode;
    showModal: boolean;
    setModal: (state: boolean) => void;
};
