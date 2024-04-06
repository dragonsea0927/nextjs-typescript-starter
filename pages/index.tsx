import BasicHeader from '@/components/BasicHeader';

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
        </>
    );
}
