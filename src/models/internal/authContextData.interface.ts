import { Dispatch } from 'react';
import { AuthContextState } from './authContextState.interface';
import { AuthReducerActions } from './authStateActions.interface';

export type AuthContextData = [AuthContextState, Dispatch<AuthReducerActions>];
