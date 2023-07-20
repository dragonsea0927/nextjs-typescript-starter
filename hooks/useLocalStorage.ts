import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from 'react';

declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent;
    }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, SetValue<T>] {
    /* State to store the value */
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    /**
     * Retrieves from the localStorage the value saved with the key argument
     * then parse stored json or return initialValue
     */
    const readValue = useCallback(() => {
        /* Prevents build error "window is undefined" but keeps working */
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

    /**
     * Sets the value in localStorage
     */
    const setValue: SetValue<T> = (value) => {
        /* Prevents build error "window is undefined" but keeps working */
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

            /* We dispatch a custom event so every useLocalStorage hook are notified */
            window.dispatchEvent(new Event('local-storage'));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStorageChange = useCallback(
        (event: StorageEvent | CustomEvent) => {
            if (
                (event as StorageEvent)?.key &&
                (event as StorageEvent).key !== key
            ) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue],
    );

    useEffect(() => {
        /* This only works for other documents, not the current one */
        window.addEventListener('storage', handleStorageChange);

        /* This is a custom event, triggered in writeValueToLocalStorage */
        window.addEventListener('local-storage', handleStorageChange);

        /* Remove event listeners on cleanup */
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('local-storage', handleStorageChange);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
}

/**
 * A wrapper for "JSON.parse()" to support "undefined" value
 */
function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        console.log('parsing error on', { value });
        return undefined;
    }
}
