import { AccordionProps } from '@/types/components/accordion';
import { AccordionContextProvider } from '@/context/accordionContext';
import styles from '@/styles/modules/Accordion.module.scss';

export default function Accordion({ children, allowMultiple }: AccordionProps) {
    return (
        <AccordionContextProvider allowMultiple={allowMultiple}>
            <ul className={styles['c-accordions']}>{children}</ul>
        </AccordionContextProvider>
    );
}
