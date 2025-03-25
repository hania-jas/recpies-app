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
import { HomeView, NotFoundView, RecipiesView, RecipieView, SignInView } from '../views';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  },
});

const App: React.FC = (): React.JSX.Element => {
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContext.Provider value={authContextValue}>
          <AppWrapper>
            <GlobalStyle />
            <Routes>
              <Route
                element={<ProtectedRoute><HomeView /></ProtectedRoute>}
                path={RoutingPath.Home}
              />
              <Route
                element={<ProtectedRoute><SignInView /></ProtectedRoute>}
                path={RoutingPath.SignIn}
              />
              <Route
                element={<ProtectedRoute><RecipiesView /></ProtectedRoute>}
                path={RoutingPath.Recipies}
              />
              <Route
                element={<ProtectedRoute><RecipieView /></ProtectedRoute>}
                path={RoutingPath.Recipie}
              />
              <Route element={<NotFoundView />} path="*" />
            </Routes>
          </AppWrapper>
        </AuthContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
