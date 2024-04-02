import styles from '@/styles/modules/Navigation.module.scss';
import Link from 'next/link';
import useNavigationContext from '@/context/navigationContext';
import useElementSize from '@/hooks/useElementSize';
import Logo from './icons/Logo';
import MobileNavigation from './MobileNavigation';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Navigation() {
    const { navigationRef, open, sticky, hidden } = useNavigationContext();
    const [headerRef, { height }] = useElementSize();

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
                                        <li>
                                            <NavItem
                                                href="/accordion"
                                                title="Accordion"
                                                className={
                                                    styles['is-current-page']
                                                }
                                            />
                                        </li>
                                        <li>
                                            <NavItem
                                                href="/form"
                                                title="Form"
                                                className={
                                                    styles['is-current-page']
                                                }
                                            />
                                        </li>
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
