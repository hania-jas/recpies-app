import { useEffect, useState } from 'react';

import { UseLocalStorage, UseState } from '../types';

export const useLocalStorage: <T = string>(key: string, defaultValue: T) => UseLocalStorage<T> = <T = string>(
  key: string, defaultValue: T,
): UseLocalStorage<T> => {
  const readValue: () => T = (): T => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    try {
      const item: string = window.localStorage.getItem(key) || '';

      return item ? JSON.parse(item) as T : defaultValue;
    } catch (_) {
      return defaultValue;
    }
  };

  const [storedValue, setStoredValue]: UseState<T> = useState<T>(readValue);

  const setValue: (value: T) => void = (value: T): void => {
    try {
      const newValue: T = value instanceof Function ? value(storedValue) as T : value;
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
      setStoredValue(newValue);
      window.dispatchEvent(new Event('local-storage'));
    // eslint-disable-next-line no-useless-return
    } catch (_) { return; }
  };

  useEffect(
    (): () => void => {
      const handleStorageEventChange: () => void = (): void => setStoredValue(readValue());
      window.addEventListener('storage', handleStorageEventChange);
      window.addEventListener('local-storage', handleStorageEventChange);

      return (): void => {
        window.removeEventListener('storage', handleStorageEventChange);
      };
    },
    [],
  );

  return [storedValue, setValue];
};
