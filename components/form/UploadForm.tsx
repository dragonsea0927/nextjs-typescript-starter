import { Labels, UploadFormData } from '@/types/form';
import styles from '../../styles/modules/Form.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useController } from 'react-hook-form';
import useIsMounted from '@/hooks/useIsMounted';
import { useTheme } from 'next-themes';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { uploadSchema } from '@/schemas/uploadForm';
import { yupResolver } from '@hookform/resolvers/yup';
import useUnsavedChanges from '@/hooks/useUnsavedChanges';
import classNames from 'classnames';
import FormInput from './FormInput';
import FormFileInput from './FormFileInput';
import FormTextarea from './FormTextarea';
import FormRecaptchaNote from './FormRecaptchaNote';
import Button from '../Button';
import TranslateInOut from '../gsap/TranslateInOut';
import FadeInOut from '../gsap/FadeInOut';
import ScaleInOut from '../gsap/ScaleInOut';
import { Theme, toast, ToastContainer, Zoom } from 'react-toastify';

const labels: Labels = {
    firstname: 'First name',
    lastname: 'Last name',
    email: 'Email',
    resume: 'Resume',
    coverletter: 'Cover Letter',
    message: 'Message',
};

async function sendFormData(data: UploadFormData, recaptchaToken: string) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) {
            formData.append(key, value[0]);
        } else {
            formData.append(key, value as string);
        }
    });

    formData.append('labels', JSON.stringify(labels));
    formData.append('recaptchaToken', recaptchaToken);

    return await fetch('/api/uploadform', {
        method: 'POST',
        body: formData,
    });
}

export default function UploadForm() {
    const {
        register,
        control,
        handleSubmit,
        reset,
        setError,
        formState: { isSubmitting, errors, isDirty },
    } = useForm<UploadFormData>({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            resume: '',
            coverletter: '',
            message: '',
        },
        resolver: yupResolver(uploadSchema),
    });
    const isMounted = useIsMounted();
    const { resolvedTheme } = useTheme();
    const { executeRecaptcha } = useGoogleReCaptcha();

    /* Prompt the user if they try and leave with unsaved changes */
    useUnsavedChanges(isDirty);

    const submitForm = async (data: UploadFormData, recaptchaToken: string) => {
        const toastConfig = {
            isLoading: false,
            autoClose: 3000,
            closeButton: true,
            draggable: true,
        };

        const toastId = toast.loading('Your message is on its way !');

        try {
            const response = await sendFormData(data, recaptchaToken);

            const _data = await response.json();

            if (!response.ok) {
                /* API returns validation errors, this type of error will not persist with each submission */
                setError('root.serverError', {
                    type: response.status.toString(),
                });
                if (_data.errors) {
                    /* Validation error, expect response to be a JSON response {"field": "error message for that field"} */
                    for (const [fieldName, errorMessage] of Object.entries(
                        _data.errors,
                    ) as [keyof UploadFormData, string][]) {
                        setError(fieldName, {
                            type: 'custom',
                            message: errorMessage,
                        });
                    }
                }
                throw new Error(_data.message || 'Form has errors');
            }

            toast.update(toastId, {
                render: _data.message,
                type: 'success',
                ...toastConfig,
            });

            /* Resets form after success */
            reset();
        } catch (error) {
            if (error instanceof Error) {
                toast.update(toastId, {
                    render: error.message,
                    type: 'error',
                    ...toastConfig,
                });
            }
        }
    };

    const handleSubmitForm = async (data: UploadFormData) => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        await executeRecaptcha('submit')
            .then((recaptchaToken) => {
                submitForm(data, recaptchaToken);
            })
            .catch((error) =>
                console.error(`Form - Recaptcha Error : ${error}`),
            );
    };

    return (
        <>
            <form
                className={classNames(
                    'u-spacing--responsive--bottom',
                    styles['c-form'],
                )}
                onSubmit={handleSubmit(handleSubmitForm)}
                noValidate
            >
                <div className="o-container--small">
                    <div className={styles['c-form__inner']}>
                        <div className={styles['c-form__row']}>
                            <TranslateInOut
                                delay={0.1}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <FormInput
                                    htmlFor="firstname"
                                    label="First name"
                                    id="firstname"
                                    required={true}
                                    className="c-formElement--bordered"
                                    register={register('firstname')}
                                    errors={errors['firstname']}
                                />
                            </TranslateInOut>
                            <TranslateInOut
                                delay={0.15}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <FormInput
                                    htmlFor="lastname"
                                    label="Last name"
                                    id="lastname"
                                    required={true}
                                    className="c-formElement--bordered"
                                    register={register('lastname')}
                                    errors={errors['lastname']}
                                />
                            </TranslateInOut>
                            <TranslateInOut
                                delay={0.2}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <FormInput
                                    htmlFor="email"
                                    label="Email"
                                    type="email"
                                    id="email"
                                    required={true}
                                    className="c-formElement--bordered"
                                    register={register('email')}
                                    errors={errors['email']}
                                />
                            </TranslateInOut>
                            <TranslateInOut
                                delay={0.25}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <FormFileInput
                                    htmlFor="resume"
                                    label="Resume"
                                    type="file"
                                    id="resume"
                                    required={true}
                                    className="c-formElement--upload--bordered"
                                    controller={useController({
                                        control,
                                        name: 'resume',
                                    })}
                                    errors={errors['resume']}
                                />
                            </TranslateInOut>
                            <TranslateInOut
                                delay={0.3}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <FormFileInput
                                    htmlFor="coverletter"
                                    label="Cover Letter"
                                    type="file"
                                    id="coverletter"
                                    className="c-formElement--upload--bordered"
                                    controller={useController({
                                        control,
                                        name: 'coverletter',
                                    })}
                                    errors={errors['coverletter']}
                                />
                            </TranslateInOut>
                        </div>
                        <TranslateInOut
                            delay={0.35}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <FormTextarea
                                htmlFor="message"
                                label="Message"
                                id="message"
                                required={true}
                                className="c-formElement--bordered"
                                register={register('message')}
                                errors={errors['message']}
                            />
                        </TranslateInOut>
                        <FadeInOut delay={0.25} watch>
                            <FormRecaptchaNote />
                        </FadeInOut>
                        <div className={styles['c-form__btn']}>
                            <ScaleInOut
                                durationIn={1}
                                delay={0.25}
                                ease="elastic.out"
                                watch
                            >
                                <Button
                                    label="Send"
                                    className="c-btn"
                                    wrapperClassName={classNames({
                                        'c-formElement--submit': isSubmitting,
                                    })}
                                    type="submit"
                                    disabled={isSubmitting}
                                />
                            </ScaleInOut>
                        </div>
                    </div>
                </div>
            </form>
            {isMounted() && (
                <ToastContainer
                    position={toast.POSITION.BOTTOM_CENTER}
                    transition={Zoom}
                    theme={resolvedTheme as Theme}
                    className="c-toastify"
                />
            )}
        </>
    );
}
