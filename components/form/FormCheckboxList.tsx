import { CheckboxList } from '@/types/form/elements';
import FormCheckbox from './FormCheckbox';
import classNames from 'classnames';

export default function FormCheckboxList({
    title,
    items,
    className,
    name,
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
                        className="c-formElement--checkboxSvg"
                        register={register}
                    />
                ))}
            </div>
            {errors?.message && <label htmlFor={name}>{errors?.message}</label>}
        </div>
    );
}
