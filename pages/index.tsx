import BasicHeader from '@/components/BasicHeader';
import Button from '@/components/Button';
import ShuffleTextInOut from '@/components/gsap/ShuffleTextInOut';
import TranslateInOut from '@/components/gsap/TranslateInOut';

export default function Home() {
    return (
        <>
            <BasicHeader
                title="Next.js typescript starter"
                content="A collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP."
                button={{
                    label: 'Powered by Next.js',
                    isExternal: true,
                    externalHref: 'https://nextjs.org/',
                    className: 'c-btn',
                }}
            />
            <section className="c-flexSection u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#components">
                        <h2 id="components">Components</h2>
                    </ShuffleTextInOut>
                    <div className="u-overflow--hidden">
                        <TranslateInOut delay={0.4} y="100%">
                            <div className="o-wysiwyg">
                                <p>
                                    This starter includes complete navigation
                                    with different states (open, sticky,
                                    hidden...) and reusable components like
                                    modal, accordion, button, form elements and
                                    more. Check out the components folder.
                                </p>
                            </div>
                        </TranslateInOut>
                    </div>
                    <div className="c-flexSection__row">
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.45}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="GSAP"
                                    href="/gsap"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.65}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Accordion"
                                    href="/accordion"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.85}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Form"
                                    href="/form"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={1.05}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="File upload form"
                                    href="/upload"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
