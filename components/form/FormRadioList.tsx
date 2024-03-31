import { RadioList } from '@/types/form/elements';
import FormRadio from './FormRadio';
import classNames from 'classnames';

export default function FormRadioList({
    title,
    items,
    className,
    htmlFor,
    register,
    errors,
}: RadioList) {
    return (
        <div className={className}>
            <p>{title}</p>
            <div
                className={classNames(
                    'c-formElement',
                    'c-formElement--marginNone',
                    { 'has-error': errors?.message },
                )}
            >
                {items.map((item) => (
                    <FormRadio
                        key={`${item
                            .trim()
                            .replace(/\s+/g, '-')
                            .toLowerCase()}`}
                        htmlFor={`${item
                            .trim()
                            .replace(/\s+/g, '-')
                            .toLowerCase()}`}
                        label={item}
                        id={`${item.trim().replace(/\s+/g, '-').toLowerCase()}`}
                        value={item}
                        className="c-formElement--radio"
                        register={register}
                    />
                ))}
            </div>
            {errors?.message && (
                <label htmlFor={htmlFor}>{errors?.message}</label>
            )}
        </div>
    );
}
