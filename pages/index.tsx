import useElementSize from '@/hooks/useElementSize';
import useIsMounted from '@/hooks/useIsMounted';
import useLockedScroll from '@/hooks/useLockedScroll';
import useScrollbar from '@/hooks/useScrollbar';
import useWindowLocation from '@/hooks/useWindowLocation';
import useWindowSize from '@/hooks/useWindowSize';
import BasicHeader from '@/components/BasicHeader';
import Button from '@/components/Button';
import RotateInOut3D from '@/components/gsap/RotateInOut3D';
import ShuffleTextInOut from '@/components/gsap/ShuffleTextInOut';
import TranslateInOut from '@/components/gsap/TranslateInOut';

export default function Home() {
    const { windowSize, isMobile, isDesktop } = useWindowSize();
    const { scrollY, directionY } = useScrollbar();
    const [sectionRef, size] = useElementSize();
    const [locked, setLocked] = useLockedScroll(false);
    const { currentURL } = useWindowLocation();
    const isMounted = useIsMounted();
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
            <section
                className="c-gridSection u-spacing--responsive--bottom"
                ref={sectionRef}
            >
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#hooks" watch>
                        <h2 id="hooks">Hooks</h2>
                    </ShuffleTextInOut>
                    <div className="u-overflow--hidden">
                        <TranslateInOut
                            delay={0.4}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <div className="o-wysiwyg">
                                <p>
                                    Simple and usefull React hooks, ready to
                                    use.
                                </p>
                            </div>
                        </TranslateInOut>
                    </div>
                    <div className="c-gridSection__row">
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useWindowSize</h3>
                                <div className="o-wysiwyg">
                                    <p>Width: {windowSize.width}</p>
                                    <p>Height: {windowSize.height}</p>
                                    <p>isMobile: {String(isMobile)}</p>
                                    <p>isDesktop: {String(isDesktop)}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useScrollbar</h3>
                                <div className="o-wysiwyg">
                                    <p>scrollY: {scrollY}</p>
                                    <p>directionY: {directionY}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useElementSize</h3>
                                <div className="o-wysiwyg">
                                    <p>E.g. sectionRef</p>
                                    <p>Width: {size.width}</p>
                                    <p>Height: {size.height}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useLockedScroll</h3>
                                <div className="o-wysiwyg">
                                    <p>Locked: {String(locked)}</p>
                                    <Button
                                        label={
                                            locked
                                                ? 'Unlock scroll'
                                                : 'Lock scroll'
                                        }
                                        onClick={() => setLocked(!locked)}
                                        className="c-btn"
                                    />
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useWindowLocation</h3>
                                <div className="o-wysiwyg">
                                    <p>currentURL: {currentURL}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useIsMounted</h3>
                                <div className="o-wysiwyg">
                                    <p>isMounted: {String(isMounted())}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                    </div>
                </div>
            </section>
        </>
    );
}
