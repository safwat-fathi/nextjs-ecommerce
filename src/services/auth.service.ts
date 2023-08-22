import HttpClient from "@/core/lib/http-client";
import { IAuthService, TLoginRes, TLogoutRes } from "./types/services";
import axios, { AxiosResponse } from "axios";
import { ROUTES } from "@/routes";

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_FRONT_DEV_API);

class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<TLoginRes> {
    // const url = new URL(
    //   ROUTES.login,
    //   process.env.NEXT_PUBLIC_BASE_FRONT_DEV_API
    // );

    // const res = await axios.post<TLoginRes>(url.toString(), {
    //   email,
    //   password,
    // });
    const res = await httpClient.post<TLoginRes>(ROUTES.login, {
      email,
      password,
    });

    return res;
  }

  async logout(): Promise<TLogoutRes> {
    const res = await httpClient.get<TLogoutRes>(ROUTES.logout);

    return res;
  }
}

export default AuthService;
