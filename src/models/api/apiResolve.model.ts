export type ApiResolve<T> = (value: T | PromiseLike<T>) => void;
