import '@/styles/style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useNextCssRemovalPrevention from '@/hooks/useNextCssRemovalPrevention';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { TransitionContextProvider } from '@/context/transitionContext';
import { NavigationContextProvider } from '@/context/navigationContext';
import Layout from '@/components/Layout';

const roboto = Roboto({
    fallback: [
        '-apple-systen',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
    ],
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const victorMono = localFont({
    fallback: [
        '-apple-systen',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
    ],
    src: [
        {
            path: '../public/fonts/VictorMono-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/VictorMono-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
});

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement instanceof HTMLElement &&
            document.activeElement.blur();
    }, [router]);

    /* Temporary fix to avoid flash of unstyled content (FOUC) during route transitions */
    useNextCssRemovalPrevention();

    return (
        <>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                scriptProps={{
                    async: true,
                    defer: true,
                    appendTo: 'body',
                }}
            >
                <TransitionContextProvider>
                    <NavigationContextProvider>
                        <style jsx global>
                            {`
                                :root {
                                    --font-primary: ${roboto.style.fontFamily};
                                    --font-secondary: ${victorMono.style
                                        .fontFamily};
                                }
                            `}
                        </style>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </NavigationContextProvider>
                </TransitionContextProvider>
            </GoogleReCaptchaProvider>
        </>
    );
}
