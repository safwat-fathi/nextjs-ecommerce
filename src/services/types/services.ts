import { User } from "@/lib/contexts/types/index.";

export interface IAuthService {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
