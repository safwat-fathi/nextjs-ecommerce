import { IUser } from "@/types/i-user";

export interface IAuthService {
  login(email: string, password: string): Promise<IUser | null>;
  logout(): Promise<boolean | null>;
}
