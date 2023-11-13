import { User } from '../api';

export interface AuthContextState {
  userData: User | null;
  token: string | null;
}
