import { AxiosResponse } from 'axios';
import { ApiError } from './apiError.model';

export interface ApiResponse<T> extends AxiosResponse<T> {
  meta?: Record<string, unknown>
  error?: ApiError;
}
