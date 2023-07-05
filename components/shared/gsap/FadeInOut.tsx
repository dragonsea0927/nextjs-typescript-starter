import { Fade } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function FadeInOut({
    children,
    durationIn = 1,
    durationOut = 0.35,
    delay = 0,
    delayOut = 0,
    ease,
    easeOut,
    outro,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers,
}: Fade) {
    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut}
            from={{
                opacity: 0,
            }}
            to={{
                ease: ease,
                opacity: 1,
            }}
            outro={outro}
            skipOutro={skipOutro}
            watch={watch}
            start={start}
            end={end}
            scrub={scrub}
            markers={markers}
        >
            {children}
        </AnimateInOut>
    );
}
