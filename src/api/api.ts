import axios, { AxiosInstance } from 'axios';

import { LocalStorageKey } from '../enums';
import { appConfig } from '../appConfig';

export const api: AxiosInstance = axios.create({
  baseURL: appConfig.api,
  responseType: 'json',
  headers: {
    ...((typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem(LocalStorageKey.AuthData) ?? '{}')?.token)
      ? { Authorization: `Bearer ${JSON.parse(window.localStorage.getItem(LocalStorageKey.AuthData) ?? '{}').token}` }
      : {}
    ),
  },
});
