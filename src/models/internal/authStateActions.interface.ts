import { AuthReducerAction } from '../../enums';
import { AuthContextState } from './authContextState.interface';

export type AuthReducerActions =
  | { type: AuthReducerAction.SignIn; payload: AuthContextState }
