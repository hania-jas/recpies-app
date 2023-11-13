import { useContext } from 'react';

import { AuthReducerAction, LocalStorageKey } from '../enums';
import { UseAuth, UseLocalStorage } from '../types';
import { useLocalStorage } from './useLocalStorage.hook';
import { AuthContextData, AuthContextState, User } from '../models';
import { AuthContext } from '../contexts';

export const useAuth: () => UseAuth = (): UseAuth => {
  const [state, dispatch]: AuthContextData = useContext(AuthContext);
  const [_, storeAuthData]: UseLocalStorage<AuthContextState | null> = useLocalStorage<AuthContextState | null>(
    LocalStorageKey.AuthData, null,
  );

  const signIn: (userData: User, token: string) => void = (userData: User, token: string): void => {
    dispatch({ type: AuthReducerAction.SignIn, payload: { userData, token } });
    storeAuthData({ userData, token });
  };

  const isUserLoggedIn: () => boolean = (): boolean => !!state.token;

  return {
    signIn,
    isUserLoggedIn,
    token: state?.token ?? null,
    userData: state?.userData ?? null,
  };
};
