import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import BasicHeader from '@/components/BasicHeader';

export default function gsap({}: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    return (
        <>
            <BasicHeader
                title="GSAP"
                content="The most common reusable custom animations built with GSAP. They can be used as simple intro animations or page transitions."
            />
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
