import HttpClient from "@/core/lib/http-client";
import { IAuthService } from "./types/services";
import { IUser } from "@/types/i-user";
import { AxiosResponse } from "axios";

const httpClient = new HttpClient();

export class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<IUser | null> {
    try {
      const user = (await httpClient.post("/test/login", {
        email,
        password,
      })) as AxiosResponse<IUser, any>;

      return user.data;
    } catch (error) {
      throw new Error("login@AuthService");
    }
  }

  async logout(): Promise<boolean | null> {
    try {
      await httpClient.get("/test/logout");

      return true;
    } catch (error) {
      throw new Error("logout@AuthService");
    }
  }
}
