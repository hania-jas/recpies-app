import { AxiosResponse } from 'axios';

import { api } from '../api';
import { ApiError, ApiReject, ApiResolve } from '../../models';

// TODO: add models to request
export const getRecipiesList: () => Promise<any> = (): Promise<any> => new Promise(
  (resolve: ApiResolve<any>, reject: ApiReject<ApiError>): Promise<void> => (
    api.get('/recipies').then(
      (response: AxiosResponse<any>): void => { resolve(response?.data); },
    ).catch((error: AxiosResponse<ApiError>): void => reject(error))
  ),
);
