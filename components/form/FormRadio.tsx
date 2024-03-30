import { Radio } from '@/types/form/elements';
import styles from '../../styles/modules/FormRadio.module.scss';
import classNames from 'classnames';

export default function FormRadio({
    htmlFor,
    label,
    id,
    value,
    className,
    register,
}: Radio) {
    return (
        <div className={classNames(styles['c-formElement'], styles[className])}>
            <input type="radio" id={id} value={value} {...register} />
            <label htmlFor={htmlFor}>{label}</label>
        </div>
    );
}
