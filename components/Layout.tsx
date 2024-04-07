import { Layout } from '@/types/components/global';
import TransitionLayout from './TransitionLayout';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, routes }: Layout) {
    return (
        <>
            <TransitionLayout>
                <Navigation routes={routes} />
                <main>
                    {children}
                    <Footer routes={routes} />
                </main>
            </TransitionLayout>
        </>
    );
}
