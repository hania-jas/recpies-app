import { AxiosResponse } from 'axios';

export type ApiReject<T = null> = (error?: AxiosResponse<T>) => void;
