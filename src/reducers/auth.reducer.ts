import { AuthReducerAction } from '../enums';
import { AuthContextState } from '../models';
import { AuthReducerActions } from '../models/internal/authStateActions.interface';

export const authReducer = (state: AuthContextState, action: AuthReducerActions): AuthContextState => {
  switch (action.type) {
    case AuthReducerAction.SignIn:
      return { ...state, ...action.payload };
    case AuthReducerAction.SignOut:
      return { token: null, userData: null };
    default:
      return state;
  }
};
