import { TogglerProps } from '@/types/components/global';
import styles from '@/styles/modules/Navigation.module.scss';
import gsap from 'gsap';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import Logo from './icons/Logo';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {
    const routes = [
        {
            href: '/gsap',
            title: 'GSAP',
        },
        {
            href: '/accordion',
            title: 'Accordion',
        },
        {
            href: '/form',
            title: 'Form',
        },
    ];
    const { navigationRef, open, sticky, hidden, toggle } =
        useNavigationContext();
    const [headerRef, { height }] = useElementSize();
    const navItemsRef = useRef<HTMLAnchorElement[] | null[]>([]);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            const increment = 0.2;
            let initialDelay = 0.7;

            navItemsRef.current.forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        y: '15px',
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
    }, []);

    return (
        <>
            <style jsx global>{`
                :root {
                    --navigation-height: ${height}px;
                }
            `}</style>
            <header
                className={classNames(styles['c-navigation'], {
                    [styles['is-sticky']]: sticky,
                    [styles['is-hidden']]: hidden,
                    [styles['is-open']]: open,
                })}
                ref={(el: HTMLDivElement) => {
                    headerRef(el);
                    navigationRef.current = el;
                }}
            >
                <div className="o-container">
                    <div className={styles['c-navigation__row']}>
                        <div className={styles['c-navigation__logo']}>
                            <Link href="/" title="Next.js starter">
                                <Logo />
                            </Link>
                        </div>
                        <Toggler open={open} toggle={toggle} />
                        <MobileNavigation />
                        <nav className={styles['c-navigation__nav']}>
                            <div
                                className={styles['c-navigation__nav__primary']}
                            >
                                <div
                                    className={
                                        styles[
                                            'c-navigation__nav__primary--list'
                                        ]
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
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

function Toggler({ open, toggle }: TogglerProps) {
    return (
        <button
            className={classNames(styles['m-toggler'], {
                [styles['is-nav-active']]: open,
            })}
            type="button"
            aria-label="Toggle menu"
            onClick={toggle}
        >
            <div className={styles['m-toggler__lines']}>
                <span></span>
            </div>
        </button>
    );
}
