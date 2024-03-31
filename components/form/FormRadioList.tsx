import { RadioList } from '@/types/form/elements';
import FormRadio from './FormRadio';
import classNames from 'classnames';
import { slugify } from '@/utils/string';

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
                        key={slugify(item)}
                        htmlFor={slugify(item)}
                        label={item}
                        id={slugify(item)}
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
