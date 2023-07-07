import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, SetValue<T>] {
    /**
     * Retrieves from the localStorage the value saved with the key argument
     * then parse stored json or return initialValue
     */
    const readValue = useCallback(() => {
        /* Prevent build error "window is undefined" but keeps working */
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (parseJSON(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    /* State to store the value */
    const [storedValue, setStoredValue] = useState<T>(readValue);

    /**
     * Sets the value in localStorage
     */
    const setValue: SetValue<T> = (value) => {
        /* Prevent build error "window is undefined" but keeps working */
        if (typeof window === 'undefined') {
            console.warn(
                `Tried setting localStorage key "${key}" even though environment is not a client`,
            );
        }

        try {
            /* Allow value to be a function */
            const newValue =
                value instanceof Function ? value(storedValue) : value;
            /* Save to local storage */
            window.localStorage.setItem(key, JSON.stringify(newValue));
            /* Save state */
            setStoredValue(newValue);
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); /* Empty array ensures that effect is only run on mount */

    return [storedValue, setValue];
}

/**
 * A wrapper for "JSON.parse()"" to support "undefined" value
 */
function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        console.log('parsing error on', { value });
        return undefined;
    }
}
