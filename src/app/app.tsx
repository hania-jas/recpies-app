import React, { useEffect, useMemo, useReducer } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LocalStorageKey, RoutingPath } from '../enums';
import { GlobalStyle } from '../theme/globalStyle.theme';
import { UseLocalStorage } from '../types';
import { useLocalStorage } from '../hooks';
import { AuthContextData, AuthContextState } from '../models';
import { authReducer } from '../reducers';
import { AuthContext } from '../contexts';
import { api } from '../api/api';
import { AppWrapper, ProtectedRoute } from '../components';
import { HomeView, NotFoundView, SignInView } from '../views';

const App: React.FC = (): JSX.Element => {
  const [authData, storeAuthData]: UseLocalStorage<AuthContextState> = useLocalStorage<AuthContextState>(
    LocalStorageKey.AuthData, { userData: null, token: null },
  );
  const [authState, authDispatch]: AuthContextData = useReducer(
    authReducer,
    authData
      ? { userData: authData.userData, token: authData.token }
      : { userData: null, token: null },
  );

  useEffect(
    (): void => {
      if (authData.token) {
        api.defaults.headers.common.Authorization = `Bearer  ${authData.token}`;
        storeAuthData({ ...authData, token: authData.token });
      } else {
        delete api.defaults.headers.common.Authorization;
        storeAuthData({ ...authData, token: null });
      }
    },
    [authData.token],
  );

  const authContextValue: AuthContextData = useMemo((): AuthContextData => [authState, authDispatch], [authState]);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={authContextValue}>
        <AppWrapper>
          <GlobalStyle />
          <Routes>
            <Route
              path={RoutingPath.Home}
              element={<ProtectedRoute><HomeView /></ProtectedRoute>}
            />
            <Route
              path={RoutingPath.SignIn}
              element={<ProtectedRoute><SignInView /></ProtectedRoute>}
            />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </AppWrapper>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
