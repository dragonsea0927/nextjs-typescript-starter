import { FooterProps } from '@/types/components/global';
import styles from '@/styles/modules/Footer.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function Footer({ routes }: FooterProps) {
    return (
        <footer className={styles['c-footer']}>
            <div className="o-container">
                <div className={styles['c-footer__row']}>
                    <div className={styles['c-footer__list']}>
                        <ul className="unstyled">
                            {routes.map(({ href, title }, i) => (
                                <li key={i}>
                                    <NavItem
                                        href={href}
                                        title={title}
                                        className={styles['is-current-page']}
                                    />
                                </li>
                            ))}
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
