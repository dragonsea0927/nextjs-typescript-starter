import { BasicHeaderProps } from '@/types/components/headers';
import styles from '@/styles/modules/BasicHeader.module.scss';
import Button from './Button';
import classNames from 'classnames';
import ImplodeExplodeInOut from './gsap/ImplodeExplodeInOut';
import TranslateInOut from './gsap/TranslateInOut';
import ScaleInOut from './gsap/ScaleInOut';

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
                            <ImplodeExplodeInOut delay={0.5} target="#title">
                                <h1 id="title">{title}</h1>
                            </ImplodeExplodeInOut>
                            {content && (
                                <div className="u-overflow--hidden">
                                    <TranslateInOut
                                        delay={0.7}
                                        y="100%"
                                        fade={false}
                                    >
                                        <div className="o-wysiwyg">
                                            <p>{content}</p>
                                        </div>
                                    </TranslateInOut>
                                </div>
                            )}
                            {button && (
                                <ScaleInOut
                                    delay={0.9}
                                    y="100%"
                                    durationIn={1}
                                    ease="elastic.out"
                                >
                                    <Button
                                        {...button}
                                        wrapperClassName={
                                            styles['c-basicHeader__btn']
                                        }
                                    />
                                </ScaleInOut>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
