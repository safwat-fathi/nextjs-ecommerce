export interface User {
  name: string;
  email: string;
}

export interface IAuthContext {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}
