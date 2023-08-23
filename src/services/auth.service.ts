import HttpClient from "@/core/lib/http-client";
import { IAuthService, TLoginRes, TLogoutRes } from "./types/services";
import axios, { AxiosResponse } from "axios";
import { ROUTES } from "@/routes";

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_FRONT_DEV_API);

class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<TLoginRes> {
    const res = await axios.post<TLoginRes>(ROUTES.login, {
      email,
      password,
    });

    return res.data;
  }

  async logout(): Promise<TLogoutRes> {
    const res = await axios.get<TLogoutRes>(ROUTES.logout);

    return res.data;
  }
}

export default AuthService;
