import { Fade } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function FadeInOut({
    children,
    durationIn = 1,
    durationOut = 0.35,
    delay = 0,
    delayOut = 0,
    ease = 'power4.out',
    easeOut = 'power4.out',
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
                ease,
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
