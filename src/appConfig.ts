import { AppConfig } from './types';

export const appConfig: AppConfig = {
  api: import.meta.env.VITE_APP_API_URL || '/api',
};
