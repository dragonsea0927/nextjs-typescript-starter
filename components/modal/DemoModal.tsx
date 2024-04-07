import { DemoModal } from '@/types/components/modal';
import styles from '@/styles/modules/DemoModal.module.scss';
import gsap from 'gsap';
import { useState, useCallback, useMemo, useRef } from 'react';
import useLockedScroll from '@/hooks/useLockedScroll';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Modal from './Modal';

export default function useDemoModal() {
    const [showDemoModal, setShowDemoModal] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [locked, setLocked] = useLockedScroll(false);

    const setModal = useCallback(
        (state: boolean) => {
            setShowDemoModal(state);
            setLocked(state);
        },
        [setShowDemoModal, setLocked],
    );

    const DemoModalCallback = useCallback(
        ({ title, content }: { title: string; content: string }) => {
            return (
                <DemoModal
                    title={title}
                    content={content}
                    showDemoModal={showDemoModal}
                    setModal={setModal}
                />
            );
        },
        [showDemoModal, setModal],
    );

    return useMemo(
        () => ({
            setModal,
            DemoModal: DemoModalCallback,
        }),
        [setModal, DemoModalCallback],
    );
}

function DemoModal({ title, content, showDemoModal, setModal }: DemoModal) {
    const modalRef = useRef<HTMLDivElement>(null);
    const timeline = useRef<GSAPTimeline | null>(null);

    useIsomorphicLayoutEffect(() => {
        if (!showDemoModal) {
            return;
        }

        const ctx = gsap.context(() => {
            timeline.current = gsap
                .timeline({
                    defaults: {
                        ease: 'power4.out',
                    },
                })
                .to(modalRef.current, {
                    opacity: 1,
                    pointerEvents: 'all',
                    duration: 0.5,
                })
                .to('[data-modal]', {
                    opacity: 1,
                    scaleY: 0.01,
                    x: 1,
                    duration: 0.35,
                })
                .to('[data-modal]', {
                    scaleY: 1,
                    duration: 0.35,
                })
                .to('[data-modal-content]', {
                    opacity: 1,
                    duration: 0.35,
                })
                .to('[data-modal-close]', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                })
                .reverse();
        }, modalRef);

        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        timeline.current?.reversed(!showDemoModal);
    }, []);

    return (
        <Modal showModal={showDemoModal} setModal={setModal} ref={modalRef}>
            <div className={styles['c-demoModal']} data-modal>
                <button
                    className={styles['c-demoModal__close']}
                    onClick={() => setModal(false)}
                    data-modal-close
                />
                <div
                    className={styles['c-demoModal__inner']}
                    data-modal-content
                >
                    <h2>{title}</h2>
                    <div className="o-wysiwyg">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
