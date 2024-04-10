import { CheckboxList } from '@/types/form/elements';
import FormCheckbox from './FormCheckbox';
import classNames from 'classnames';
import { slugify } from '@/utils/string';

export default function FormCheckboxList({
    title,
    items,
    className,
    htmlFor,
    register,
    errors,
}: CheckboxList) {
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
                    <FormCheckbox
                        key={slugify(item)}
                        htmlFor={slugify(item)}
                        label={item}
                        id={slugify(item)}
                        value={item}
                        className="c-formElement--checkboxSvg"
                        register={register}
                    />
                ))}
            </div>
            {errors?.message && (
                <label htmlFor={htmlFor}>{errors.message}</label>
            )}
        </div>
    );
}
