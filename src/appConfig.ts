import { AppConfig } from './types';

export const appConfig: AppConfig = {
  api: process.env.REACT_APP_API_URL || '/api',
};
