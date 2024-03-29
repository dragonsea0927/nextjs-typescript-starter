import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MetaDataProps } from '@/types/components/global';
import BasicHeader from '@/components/BasicHeader';
import Form from '@/components/form/Form';

export default function FormPage({}: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    return (
        <>
            <BasicHeader
                title="Form"
                content="Complete and flexible form with Google ReCaptcha V3, ready to use. Form fields are handled by React Hook Form and validated by Yup on the client/server side. The form request is managed by an API route, SendGrid and a custom HTML template are used to send the email."
            />
            <Form />
        </>
    );
}

export const getStaticProps: GetStaticProps<{
    metaData: MetaDataProps;
}> = async () => {
    const metaData: MetaDataProps = {
        title: `Form | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    };

    return {
        props: {
            metaData,
        },
    };
};
