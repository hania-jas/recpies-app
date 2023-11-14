export interface User {
  username: string;
  email: string;
  id: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
