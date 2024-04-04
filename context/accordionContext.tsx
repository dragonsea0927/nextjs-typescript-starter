import { AccordionProps } from '@/types/components/accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {
    Dispatch,
    MutableRefObject,
    RefObject,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Accordion {
    id: number;
    expanded: boolean;
    container: RefObject<HTMLDivElement>;
    content: RefObject<HTMLDivElement>;
}

interface AccordionContextType {
    items: Map<number, Accordion> | null;
    setItem: (accordion: Accordion) => void;
    deleteItem: (id: number) => boolean;
    toggle: (accordion: Accordion) => void;
}

const AccordionContext = createContext<AccordionContextType>({
    items: null,
    setItem: () => {},
    deleteItem: () => false,
    toggle: () => {},
});

const updateItem = (
    accordion: Accordion,
    latestItems: MutableRefObject<Map<number, Accordion>>,
    setItems: Dispatch<SetStateAction<Map<number, Accordion>>>,
) => {
    const itemsMap = new Map(latestItems.current);

    itemsMap.set(accordion.id, accordion);
    setItems(itemsMap);
    latestItems.current = itemsMap;
};

const updateItemHeight = (accordion: Accordion) => {
    const { expanded, container, content } = accordion;

    if (expanded) {
        gsap.to(container.current, {
            duration: 0.45,
            height: content.current?.getBoundingClientRect().height,
            opacity: 1,
            ease: 'expo.inOut',
            onComplete: () => {
                gsap.set(container.current, { height: 'auto' });
                ScrollTrigger.refresh(true);
            },
        });
    } else {
        gsap.to(container.current, {
            duration: 0.45,
            height: 0,
            opacity: 0,
            ease: 'expo.inOut',
            onComplete: () => {
                ScrollTrigger.refresh(true);
            },
        });
    }
};

export function AccordionContextProvider({
    children,
    allowMultiple,
}: AccordionProps) {
    const [items, setItems] = useState(new Map<number, Accordion>());
    const latestItems = useRef(items);

    const setItem = useCallback(
        (accordion: Accordion) => {
            updateItem(accordion, latestItems, setItems);
            if (accordion.expanded) updateItemHeight(accordion);
        },
        [setItems],
    );

    const deleteItem = useCallback((id: number): boolean => {
        const newItemsMap = new Map(latestItems.current);

        if (newItemsMap.delete(id)) {
            setItems(newItemsMap);
            latestItems.current = newItemsMap;
            return true;
        }
        return false;
    }, []);

    const toggle = (accordion: Accordion) => {
        const { id, expanded } = accordion;
        const itemObj = latestItems.current.get(id);

        if (!itemObj) {
            process.env.NODE_ENV !== 'production' &&
                console.error(`[AccordionItem] invalid key: ${id}`);
            return;
        }
        if (typeof expanded !== 'boolean')
            accordion.expanded = !itemObj.expanded;

        if (expanded) {
            updateItem(accordion, latestItems, setItems);
            updateItemHeight(accordion);
            !allowMultiple &&
                latestItems.current.forEach(
                    ({ expanded, container, content }, _id) =>
                        _id !== id &&
                        expanded &&
                        toggle({
                            id: _id,
                            expanded: false,
                            container,
                            content,
                        }),
                );
        } else {
            updateItem(accordion, latestItems, setItems);
            updateItemHeight(accordion);
        }
    };

    const contextValue: AccordionContextType = {
        items,
        setItem,
        deleteItem,
        toggle,
    };

    return (
        <AccordionContext.Provider value={contextValue}>
            {children}
        </AccordionContext.Provider>
    );
}

export function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (process.env.NODE_ENV !== 'production' && !context.items)
        throw new Error('AccordionItem must be used within an Accordion');

    return context;
}

export default function useAccordionItem({
    id,
    initialExpanded,
    container,
    content,
}: {
    id: number;
    initialExpanded: boolean;
    container: RefObject<HTMLDivElement>;
    content: RefObject<HTMLDivElement>;
}) {
    const { items, setItem, deleteItem, toggle } = useAccordionContext();
    const currentItem = items?.get(id);
    const initialState = initialExpanded ? initialExpanded : false;

    useEffect(() => {
        setItem({ id, expanded: initialState, container, content });
        return () => {
            deleteItem(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setItem, deleteItem, id]);

    return {
        expanded: currentItem ? currentItem.expanded : false,
        toggle: (expanded: boolean) =>
            toggle({ id, expanded, container, content }),
    };
}
