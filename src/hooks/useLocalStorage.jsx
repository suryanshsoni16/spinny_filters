import { useState } from "react";

// Hook
export default function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue

            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
        }
    };
    return [storedValue, setValue];
}

// Accepts item (string) and data (JSON)
export const setLocalStorageItem = (item, data) => {
    localStorage &&
        localStorage.setItem(
            item,
            typeof data === "object" ? JSON.stringify(data) : data
        );
};

// Accepts item (string) and returns JSON data
export const getLocalStorageItem = (item) => {
    const receivedItem =
        localStorage && item in localStorage ? localStorage.getItem(item) : "";

    try {
        return JSON.parse(receivedItem);
    } catch (e) {
        return receivedItem;
    }
};

