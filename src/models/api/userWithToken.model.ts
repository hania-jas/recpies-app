import { User } from './user.model';

export interface UserWithToken {
  readonly jwt: string;
  readonly user: User;
}
