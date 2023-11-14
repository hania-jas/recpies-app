import { User } from '../models';

export interface UseAuth {
  signIn: (userData: User, token: string) => void;
  isUserLoggedIn: () => boolean;
  token: string | null;
  userData: User | null;
}
