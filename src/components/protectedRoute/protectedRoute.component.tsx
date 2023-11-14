import React, { useMemo } from 'react';
import { Navigate, useLocation, Location } from 'react-router-dom';

import { useAuth } from '../../hooks';
import { UseAuth } from '../../types';
import { RoutingPath } from '../../enums';
import { ProtectedRouteProps } from './protectedRoute.types';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps): JSX.Element => {
  const { children }: ProtectedRouteProps = props;
  const { token }: UseAuth = useAuth();
  const location: Location = useLocation();
  const routesUnavailableAfterSignIn: RoutingPath[] = useMemo(
    (): RoutingPath[] => [
      RoutingPath.SignIn,
    ],
    [],
  );

  if (!token && location.pathname !== RoutingPath.SignIn) {
    return <Navigate to={RoutingPath.SignIn} replace />;
  }

  if (token && routesUnavailableAfterSignIn.includes(location.pathname as RoutingPath)) {
    return (
      <Navigate to={RoutingPath.Home} replace />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
