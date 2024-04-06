import BasicHeader from '@/components/BasicHeader';
import { useSessionStorage } from '@/hooks/useSessionStorage';

export default function Home() {
    const [value, setValue, removeValue] = useSessionStorage('test-key', 0);

    return (
        <>
            <BasicHeader
                title="Next.js starter"
                content="A collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP."
                button={{
                    label: 'Powered by Next.js',
                    isExternal: true,
                    externalHref: 'https://nextjs.org/',
                    className: 'c-btn',
                }}
            />
            <div>
                <p>Count: {value}</p>
                <button
                    onClick={() => {
                        setValue((x: number) => x + 1);
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        setValue((x: number) => x - 1);
                    }}
                >
                    Decrement
                </button>
                <button
                    onClick={() => {
                        removeValue();
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}
