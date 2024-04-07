import {
    AccordionItem,
    AccordionItemHeading,
    HeadingTag,
} from '@/types/components/accordion';
import styles from '@/styles/modules/AccordionItem.module.scss';
import gsap from 'gsap';
import React, { useId, useRef } from 'react';
import useAccordionItem from '@/context/accordionContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';
import { slugify } from '@/utils/string';
import Chevron from '../icons/Chevron';
import classNames from 'classnames';

export default function AccordionItem({
    children,
    header,
    headingTag = 'h3',
    headingClassName = '',
    id,
    initialExpanded = false,
    durationIn = 0.5,
    durationOut = 0.25,
    delay = 0,
    delayOut = 0,
    ease = 'sine.out',
    easeOut = 'sine.out',
    outro,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers,
}: AccordionItem) {
    const element = useRef<HTMLLIElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);
    const { expanded, toggle } = useAccordionItem({
        id,
        initialExpanded,
        container,
        content,
    });
    const buttonId = `${slugify(header)}-${useId()}`;
    const panelId = `${slugify(header)}-${useId()}`;
    const { timeline } = useTransitionContext();
    const from = {
        opacity: 0,
        transform: `translate(0, 100%)`,
    };

    useIsomorphicLayoutEffect(() => {
        const scrollTrigger = watch
            ? {
                  scrollTrigger: {
                      trigger: element.current,
                      start,
                      end,
                      scrub,
                      markers: markers,
                  },
              }
            : {};

        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.to(element.current, {
                ease,
                opacity: 1,
                x: 0,
                y: 0,
                delay,
                duration: durationIn,
                ...scrollTrigger,
            });

            /* Outro animation */
            if (!skipOutro) {
                const outroProperties = outro ?? from;

                timeline?.add(
                    gsap.to(element.current, {
                        ease: easeOut,
                        ...outroProperties,
                        delay: delayOut,
                        duration: durationOut,
                    }),
                    0,
                );
            }
        }, element);
        return () => ctx.revert();
    }, []);

    return (
        <li
            ref={element}
            className={styles['c-accordions__item']}
            style={{ ...from }}
        >
            <Heading
                header={header}
                headingTag={headingTag}
                headingClassName={headingClassName}
                buttonId={buttonId}
                panelId={panelId}
                expanded={expanded}
                toggle={toggle}
            />
            <div
                className={styles['c-accordions__item__container']}
                id={panelId}
                aria-labelledby={buttonId}
                ref={container}
            >
                <div
                    className={styles['c-accordions__item__container--content']}
                    ref={content}
                >
                    {children}
                </div>
            </div>
        </li>
    );
}

function HeadingTag({ headingLevel = 'h3', children, className }: HeadingTag) {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
        React.createElement(headingLevel, props, children);

    return <Heading className={className}>{children}</Heading>;
}

function Heading({
    header,
    headingTag,
    headingClassName,
    buttonId,
    panelId,
    expanded,
    toggle,
}: AccordionItemHeading) {
    return (
        <HeadingTag headingLevel={headingTag} className={headingClassName}>
            <button
                type="button"
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={expanded}
                onClick={() => toggle(!expanded)}
                className={classNames(styles['c-accordions__item__button'], {
                    [styles['is-expanded']]: expanded,
                })}
            >
                {header}
                <Chevron />
            </button>
        </HeadingTag>
    );
}
