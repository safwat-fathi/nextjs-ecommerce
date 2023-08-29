import { IAuthService, TLoginRes, TLogoutRes } from "./types/services";
import axios from "axios";
import { ROUTES } from "@/routes";
import { getCookie } from "cookies-next";
import CONSTANTS from "@/constants";

class AuthService implements IAuthService {
  // private _router = useRouter();
  private _lang = getCookie(CONSTANTS.NEXT_LOCALE);

  async login(email: string, password: string): Promise<TLoginRes> {
    // const res = await axios.post<TLoginRes>(ROUTES.login, {
    //   email,
    //   password,
    // });
    const res = await axios.post<TLoginRes>(
      `${process.env.NEXT_PUBLIC_BASE_DEV_API}${ROUTES.login}`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "Accept-Language": this._lang,
        },
      }
    );
    // const res = await httpClient.post<TLoginRes>(ROUTES.login, {
    //   email,
    //   password,
    // });

    return res.data;
  }

  async logout(): Promise<TLogoutRes> {
    const res = await axios.get<TLogoutRes>(
      `${process.env.NEXT_PUBLIC_BASE_DEV_API}${ROUTES.logout}`,
      {
        withCredentials: true,
        headers: {
          "Accept-Language": this._lang,
        },
      }
    );
    // const res = await httpClient.get<TLogoutRes>(ROUTES.logout);

    return res.data;
  }
}

export default AuthService;
