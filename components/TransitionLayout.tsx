import { TransitionLayout } from '@/types/components/global';
import useTransitionContext from '@/context/transitionContext';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useNavigationContext from '@/context/navigationContext';

export default function TransitionLayout({ children }: TransitionLayout) {
    const router = useRouter();
    const [displayChildren, setDisplayChildren] = useState(children);
    const { timeline, resetTimeline } = useTransitionContext();
    const { setCurrentRoute, currentRoute } = useNavigationContext();

    useIsomorphicLayoutEffect(() => {
        if (currentRoute !== router.asPath) {
            if (timeline?.duration() === 0) {
                /* There are no outro animations, so immediately transition */
                setDisplayChildren(children);
                setCurrentRoute(router.asPath);
                window.scrollTo(0, 0);
                ScrollTrigger.refresh(true);
                return;
            }

            timeline?.play().then(() => {
                /* Outro complete so reset to an empty paused timeline */
                resetTimeline();
                setDisplayChildren(children);
                setCurrentRoute(router.asPath);
                window.scrollTo(0, 0);
                ScrollTrigger.refresh(true);
            });
        } else {
            ScrollTrigger.refresh(true);
        }
    }, [router.asPath]);

    return <div className="u-overflow--hidden">{displayChildren}</div>;
}
