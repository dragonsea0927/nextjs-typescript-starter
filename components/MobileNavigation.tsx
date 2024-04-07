import { MobileNavigationProps } from '@/types/components/global';
import styles from '@/styles/modules/MobileNavigation.module.scss';
import gsap from 'gsap';
import useNavigationContext from '@/context/navigationContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function MobileNavigation({ routes }: MobileNavigationProps) {
    const { mobileNavRef, open } = useNavigationContext();
    const navItemsRef = useRef<HTMLAnchorElement[] | null[]>([]);

    useIsomorphicLayoutEffect(() => {
        if (open) {
            const ctx = gsap.context(() => {
                /* Intro animation */
                const increment = 0.2;
                let initialDelay = 0.2;

                navItemsRef.current.forEach((item) => {
                    gsap.fromTo(
                        item,
                        {
                            y: '100%',
                        },
                        {
                            opacity: 1,
                            y: 0,
                            willChange: 'transform',
                            ease: 'sine.out',
                            delay: initialDelay,
                            duration: 0.35,
                        },
                    );

                    initialDelay += increment;
                });
            });

            return () => ctx.revert();
        }
    }, [open]);

    return (
        <>
            {open && (
                <nav
                    className={classNames(styles['c-mobileNav'], {
                        [styles['is-open']]: open,
                    })}
                    ref={mobileNavRef}
                >
                    <div className={styles['c-mobileNav__scroll']}>
                        <div className={styles['c-mobileNav__container']}>
                            <div className={styles['c-mobileNav__primary']}>
                                <div
                                    className={
                                        styles['c-mobileNav__primary--list']
                                    }
                                >
                                    <ul>
                                        {routes.map(({ href, title }, i) => (
                                            <li key={i}>
                                                <NavItem
                                                    href={href}
                                                    title={title}
                                                    className={
                                                        styles[
                                                            'is-current-page'
                                                        ]
                                                    }
                                                    ref={(el) => {
                                                        navItemsRef.current[i] =
                                                            el;
                                                    }}
                                                    style={{ opacity: 0 }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}
