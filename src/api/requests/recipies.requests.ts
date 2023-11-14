import { api } from '../api';
import { ApiError, ApiReject, ApiResolve, ApiResponse, Recipie } from '../../models';

export const getRecipiesList: () => Promise<Recipie[]> = (): Promise<Recipie[]> => new Promise(
  (resolve: ApiResolve<Recipie[]>, reject: ApiReject<ApiError>): Promise<void> => (
    api.get('/recipies').then(
      (response: ApiResponse<Recipie[]>): void => { resolve(response?.data); },
    ).catch((error: ApiResponse<ApiError>): void => reject(error))
  ),
);
