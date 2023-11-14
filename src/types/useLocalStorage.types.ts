export type UseLocalStorage<T = string> = [
  storedValue: T,
  setValue: (value: T) => void,
];
