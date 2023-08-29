import { IAuthService, TLoginRes, TLogoutRes } from "./types/services";
import axios from "axios";
import { ROUTES } from "@/routes";

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
