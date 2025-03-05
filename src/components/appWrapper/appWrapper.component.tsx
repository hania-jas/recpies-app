import * as React from 'react';
import { AppWrapperProps } from './appWrapper.types';
import { NavBar } from '../navBar/navBar.component';

export const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps) => {
  const { children }: AppWrapperProps = props;

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
