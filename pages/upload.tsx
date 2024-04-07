import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import BasicHeader from '@/components/BasicHeader';

export default function FileUploadForm({}: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    return (
        <>
            <BasicHeader
                title="File upload form"
                content="Complete and flexible form with Google ReCaptcha V3, ready to use. Form fields are handled by React Hook Form and validated by Yup on the client/server side. The form request is managed by an API route with formidable (Node.js module for parsing form data). SendGrid and a custom HTML template are used to send the email."
            />
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
}> = async () => {
    const metaData: MetaDataProps = {
        title: `File upload form | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    };

    return {
        props: {
            metaData,
        },
    };
};
