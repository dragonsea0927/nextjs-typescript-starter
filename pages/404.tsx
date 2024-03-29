import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import BasicHeader from '@/components/BasicHeader';

export default function PageNotFound({}: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    return (
        <>
            <BasicHeader
                title="Page not found"
                content="The page you are looking for could not be found."
                button={{
                    label: 'Please get me out of here',
                    href: '/',
                    className: 'c-btn',
                }}
                className="c-basicHeader--fullHeight"
            />
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
}> = async () => {
    const metaData: MetaDataProps = {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        description: 'You are lost in Space!',
    };

    return {
        props: {
            metaData,
        },
    };
};
