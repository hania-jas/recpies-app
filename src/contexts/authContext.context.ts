import React, { Context } from 'react';
import { AuthContextData } from '../models';

export const AuthContext: Context<AuthContextData> = React.createContext<AuthContextData>([
  { userData: null, token: null }, (): void => undefined,
]);
