import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';
import useNavigationContext from '@/context/navigationContext';

export default function MobileNavigation() {
    const { mobileNavRef, open } = useNavigationContext();

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
                                        <li>
                                            <NavItem
                                                href="/gsap"
                                                title="GSAP"
                                                className={
                                                    styles['is-current-page']
                                                }
                                            />
                                        </li>
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
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}
