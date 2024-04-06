import { Modal } from '@/types/components/modal';
import styles from '@/styles/modules/Modal.module.scss';
import { ForwardedRef, forwardRef, useCallback, useEffect } from 'react';

function Modal(
    { children, showModal, setModal }: Modal,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && showModal) {
                setModal(false);
            }
        },
        [showModal, setModal],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <>
            {showModal && (
                <section className={styles['m-modal']} ref={ref}>
                    <div
                        className={styles['m-modal__backdrop']}
                        onClick={() => setModal(false)}
                    />
                    {children}
                </section>
            )}
        </>
    );
}

export default forwardRef(Modal);
