import styles from '@/styles/modules/Footer.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Footer() {
    return (
        <footer className={styles['c-footer']}>
            <div className="o-container">
                <div className={styles['c-footer__row']}>
                    <div className={styles['c-footer__list']}>
                        <ul className="unstyled">
                            <li>
                                <NavItem
                                    href="/gsap"
                                    title="Gsap"
                                    className={styles['is-current-page']}
                                />
                            </li>
                            <li>
                                <NavItem
                                    href="/accordion"
                                    title="Accordion"
                                    className={styles['is-current-page']}
                                />
                            </li>
                            <li>
                                <NavItem
                                    href="/form"
                                    title="Form"
                                    className={styles['is-current-page']}
                                />
                            </li>
                            <li>
                                <NavItem
                                    href="/upload"
                                    title="File upload form"
                                    className={styles['is-current-page']}
                                />
                            </li>
                        </ul>
                    </div>
                    <div
                        className={classNames(
                            'o-wysiwyg',
                            styles['c-footer__copyright'],
                        )}
                    >
                        <p>
                            &copy; {new Date().getFullYear()} Next.js typescript
                            starter. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
