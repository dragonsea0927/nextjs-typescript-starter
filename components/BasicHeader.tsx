import { BasicHeaderProps } from '@/types/components/headers';
import styles from '@/styles/modules/BasicHeader.module.scss';
import Button from './shared/Button';
import classNames from 'classnames';

export default function BasicHeader({
    title,
    content,
    button,
    className,
}: BasicHeaderProps) {
    return (
        <>
            {title && (
                <section
                    className={classNames(
                        styles['c-basicHeader'],
                        styles[className ?? ''],
                    )}
                >
                    <div className="o-container--small">
                        <div
                            className={classNames(
                                'u-text--center',
                                styles['c-basicHeader__row'],
                            )}
                        >
                            <h1 id="title">{title}</h1>
                            {content && (
                                <div className="o-wysiwyg">
                                    <p>{content}</p>
                                </div>
                            )}
                            {button && (
                                <Button
                                    {...button}
                                    wrapperClassName={
                                        styles['c-basicHeader__btn']
                                    }
                                />
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
