import { IUser } from "./i-user";

export interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}
