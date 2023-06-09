import HttpClient from "@/core/lib/http-client";
import { IAuthService } from "./types/services";
import { User } from "@/lib/contexts/types/index.";

const httpClient = new HttpClient();

export class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<User> {
    const user = (await httpClient.post(
      "/test/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    )) as User;

    return user;
  }

  async logout(): Promise<void> {
    await httpClient.get("/test/logout");
  }
}
