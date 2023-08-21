import { IBaseSingleResponse } from "@/types/i-base-response";
import { IUserData } from "@/types/i-user";

export type TLoginRes = IBaseSingleResponse<IUserData>;
export type TLogoutRes = IBaseSingleResponse;

export interface IAuthService {
  login(email: string, password: string): Promise<TLoginRes>;
  logout(): Promise<TLogoutRes>;
}
