import React, { useMemo } from 'react';
import { Navigate, useLocation, Location } from 'react-router-dom';

import { useAuth } from '../../hooks';
import { UseAuth } from '../../types';
import { RoutingPath } from '../../enums';
import { ProtectedRouteProps } from './protectedRoute.types';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps): React.JSX.Element => {
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
    return <Navigate replace to={RoutingPath.SignIn} />;
  }

  if (token && routesUnavailableAfterSignIn.includes(location.pathname as RoutingPath)) {
    return (
      <Navigate replace to={RoutingPath.Home} />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
