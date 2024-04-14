/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import BasicHeader from '@/components/BasicHeader';
import Image from 'next/image';
import ShuffleTextInOut from '@/components/gsap/ShuffleTextInOut';
import TranslateInOut from '@/components/gsap/TranslateInOut';
import FadeInOut from '@/components/gsap/FadeInOut';
import ScaleInOut from '@/components/gsap/ScaleInOut';
import RotateInOut from '@/components/gsap/RotateInOut';
import ClipPathInOut from '@/components/gsap/ClipPathInOut';
import RotateInOut3D from '@/components/gsap/RotateInOut3D';
import ImplodeExplodeInOut from '@/components/gsap/ImplodeExplodeInOut';

export default function gsap({}: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    return (
        <>
            <BasicHeader
                title="GSAP"
                content="The most common reusable custom animations built with GSAP. They can be used as simple intro animations or page transitions."
            />
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#gsap-usage">
                        <h2 id="gsap-usage">Usage</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                A great place to get started with GSAP and React
                                is to read{' '}
                                <a
                                    href="https://gsap.com/resources/React"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GSAP with React
                                </a>
                                ,{' '}
                                <a
                                    href="https://gsap.com/docs/v3/GSAP/gsap.context()/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GSAP method gsap.context()
                                </a>{' '}
                                and{' '}
                                <a
                                    href="https://gsap.com/resources/react-advanced"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GSAP React Advanced Animation Techniques
                                </a>
                                . Wrap your component with an animation such as{' '}
                                <strong>FadeInOut</strong>,{' '}
                                <strong>TranslateInOut</strong>,{' '}
                                <strong>ScaleInOut</strong>...
                            </p>
                            <p>
                                Each animation component has built in
                                flexibility for different scenarios:
                            </p>
                            <ul>
                                <li>
                                    Setting different durations and delays for
                                    intros and outros
                                </li>
                                <li>
                                    You can easily overwrite the default ease in
                                    any animation by setting the ease prop. Use
                                    the{' '}
                                    <a
                                        href="https://greensock.com/docs/v3/Eases"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GreenSock Ease Visualizer
                                    </a>{' '}
                                    to help you choose exactly the type of
                                    easing that you need
                                </li>
                                <li>Skipping the outro animation</li>
                                <li>
                                    Creating scroll interactions and animate
                                    your component with{' '}
                                    <a
                                        href="https://greensock.com/docs/v3/Plugins/ScrollTrigger"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GSAP ScrollTrigger
                                    </a>{' '}
                                    by setting the watch prop to true (default:
                                    false). Determining the start and end
                                    position of the ScrollTrigger with start
                                    (default: 'top bottom') and end (default:
                                    'bottom top') prop
                                </li>
                                <li>
                                    Setting markers prop to true during
                                    development allows you to see exactly where
                                    the start/end/trigger points are
                                </li>
                            </ul>
                        </div>
                    </TranslateInOut>
                </div>
            </div>
            <div className="c-gridSection">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#animations" watch>
                        <h2 id="animations">Animations</h2>
                    </ShuffleTextInOut>
                    <div className="c-gridSection__row">
                        <FadeInOut
                            durationIn={1.5}
                            delay={0.4}
                            ease="slow"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <h3 className="h5">FadeInOut</h3>
                                    <p>
                                        durationIn="1.5"
                                        <br />
                                        delay="0.4"
                                        <br />
                                        ease="slow"
                                        <br />
                                        watch
                                    </p>
                                </div>
                            </div>
                        </FadeInOut>
                        <TranslateInOut
                            durationIn={1.5}
                            delay={0.4}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <h3 className="h5">TranslateInOut</h3>
                                    <p>
                                        durationIn="1.5"
                                        <br />
                                        delay="0.4"
                                        <br />
                                        y="100%"
                                        <br />
                                        start="-100% bottom"
                                        <br />
                                        end="top top"
                                        <br />
                                        watch
                                    </p>
                                </div>
                            </div>
                        </TranslateInOut>
                        <ScaleInOut
                            durationIn={1}
                            delay={0.4}
                            ease="elastic.out"
                            watch
                        >
                            <div
                                className="c-gridSection__item"
                                style={{ display: 'flex' }}
                            >
                                <div className="o-wysiwyg">
                                    <h3 className="h5">ScaleInOut</h3>
                                    <p>
                                        durationIn="1"
                                        <br />
                                        delay="0.4"
                                        <br />
                                        ease="elastic.out"
                                        <br />
                                        y="100%"
                                        <br />
                                        watch
                                    </p>
                                </div>
                            </div>
                        </ScaleInOut>
                    </div>
                    <div className="c-gridSection__rotate">
                        <div className="o-wysiwyg">
                            <h3 className="h5">RotateInOut</h3>
                            <p>
                                fade="false"
                                <br />
                                durationIn="0.6"
                                <br />
                                rotateTo="360"
                                <br />
                                start="bottom bottom"
                                <br />
                                end="top top"
                                <br />
                                watch
                                <br />
                                scrub
                            </p>
                        </div>
                        <RotateInOut
                            fade={false}
                            durationIn={0.6}
                            rotateTo={360}
                            start="bottom bottom"
                            end="top top"
                            watch
                            scrub
                        >
                            <div className="c-gridSection__rotate--box" />
                        </RotateInOut>
                    </div>
                </div>
            </div>
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut
                        delay={0.3}
                        target="#custom-animations"
                        watch
                    >
                        <h2 id="custom-animations">Custom animations</h2>
                    </ShuffleTextInOut>
                    <div className="o-wysiwyg">
                        <h3 className="h5">ClipPathInOut</h3>
                        <p>
                            fade="false"
                            <br />
                            delay="0.4"
                            <br />
                            clipPath="inset(0% 100% 0% 0%)"
                            <br />
                            watch
                        </p>
                    </div>
                    <div className="u-spacing--responsive">
                        <ClipPathInOut
                            fade={false}
                            delay={0.4}
                            clipPath="inset(0% 100% 0% 0%)"
                            watch
                        >
                            <div>
                                <picture>
                                    <Image
                                        alt="image"
                                        src="/static/react.png"
                                        width={1160}
                                        height={663}
                                    />
                                </picture>
                            </div>
                        </ClipPathInOut>
                    </div>
                    <div className="c-rotateInOut3D">
                        <div className="o-wysiwyg">
                            <h3 className="h5">RotateInOut3D</h3>
                            <p>
                                durationIn="1 + Math.random()"
                                <br />
                                y="100px"
                                <br />
                                start="-100px bottom"
                                <br />
                                watch
                            </p>
                        </div>
                        <div className="c-rotateInOut3D__row u-spacing--responsive--bottom">
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--1" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--2" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--3" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--4" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--5" />
                            </RotateInOut3D>
                        </div>
                    </div>
                    <div className="o-wysiwyg">
                        <h3 className="h5">ImplodeExplodeInOut</h3>
                        <p>
                            delay="0.5"
                            <br />
                            target="#implode-explode"
                            <br />
                            watch
                        </p>
                    </div>
                    <div className="u-spacing--responsive">
                        <ImplodeExplodeInOut
                            delay={0.5}
                            target="#implode-explode"
                            watch
                        >
                            <h2 className="u-margin--none" id="implode-explode">
                                Build complex animations and page transitions
                                with GSAP and Next.js
                            </h2>
                        </ImplodeExplodeInOut>
                    </div>
                    <div className="o-wysiwyg">
                        <h3 className="h5">ShuffleTextInOut</h3>
                        <p>
                            delay="0.3"
                            <br />
                            target="#shuffle"
                            <br />
                            watch
                        </p>
                    </div>
                    <div className="u-spacing--responsive--top">
                        <ShuffleTextInOut delay={0.3} target="#shuffle" watch>
                            <h2 className="u-margin--none" id="shuffle">
                                GreenSock
                            </h2>
                        </ShuffleTextInOut>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
}> = async () => {
    const metaData: MetaDataProps = {
        title: `GSAP | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    };

    return {
        props: {
            metaData,
        },
    };
};
