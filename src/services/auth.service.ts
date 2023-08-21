import HttpClient from "@/core/lib/http-client";
import { IAuthService, TLoginRes, TLogoutRes } from "./types/services";
import { AxiosResponse } from "axios";
import { routes } from "@/routes";

const httpClient = new HttpClient();

class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<TLoginRes> {
    const res = await httpClient.post<TLoginRes>(routes.login, {
      email,
      password,
    });

    return res;
  }

  async logout(): Promise<TLogoutRes> {
    const res = await httpClient.get<TLogoutRes>(routes.logout);

    return res.data;
  }
}

export default AuthService;
