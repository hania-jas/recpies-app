import { AxiosResponse } from 'axios';

import { api } from '../api';
import { ApiError, ApiReject, ApiResolve, LoginModel, UserWithToken } from '../../models';

export const loginRequest: (data: LoginModel) => Promise<UserWithToken> = (data: LoginModel): Promise<UserWithToken> => new Promise(
  (resolve: ApiResolve<UserWithToken>, reject: ApiReject<ApiError>): Promise<void> => (
    api.post('/api/auth/local', data).then(
      (response: AxiosResponse<UserWithToken>): void => { resolve(response?.data); },
    ).catch((error: AxiosResponse<ApiError>): void => reject(error))
  ),
);
