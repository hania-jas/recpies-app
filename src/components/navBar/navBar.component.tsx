import React from 'react';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, IconButton } from './navBar.styled';
import { NavBarProps } from './navBar.types';
import { Color, RoutingPath } from '../../enums';
import { UseAuth } from '../../types';
import { useAuth } from '../../hooks';

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps): React.JSX.Element => {
  const { className }: NavBarProps = props;
  const { isUserLoggedIn, signOut }: UseAuth = useAuth();
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container className={className}>
      {/* TODO: add context menu for user icon */}
      <IconButton onClick={(): void | Promise<void> => navigate(!isUserLoggedIn ? RoutingPath.SignIn : RoutingPath.Home)}>
        <CgProfile color={Color.Coral} size={25} />
      </IconButton>
      {!!isUserLoggedIn && (
        <IconButton onClick={signOut}>
          <CgLogOut color={Color.Coral} size={25} />
        </IconButton>
      )}
    </Container>
  );
};
