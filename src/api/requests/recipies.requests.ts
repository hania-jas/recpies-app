import { api } from '../api';
import { ApiError, ApiReject, ApiResolve, ApiResponse, CommonListData, Recipie } from '../../models';

export const getRecipiesList: () => Promise<CommonListData<Recipie[]>> = (): Promise<CommonListData<Recipie[]>> => new Promise(
  (resolve: ApiResolve<CommonListData<Recipie[]>>, reject: ApiReject<ApiError>): Promise<void> => (
    api.get('/api/recipies?populate=*').then(
      (response: ApiResponse<CommonListData<Recipie[]>>): void => { resolve(response?.data); },
    ).catch((error: ApiResponse<ApiError>): void => reject(error))
  ),
);
