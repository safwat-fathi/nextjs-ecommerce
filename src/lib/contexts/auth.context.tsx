import { AuthService } from "@/services/auth.service";
import { IAuthContext, User } from "@/types/contexts";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: false,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const authService = new AuthService();

  useEffect(() => {
    // TODO: check if user already logged in useEffect (from localStorage)
    console.log(user);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const user = await authService.login(email, password);

      if (!user) {
        console.log("no user found");
        // TODO: show error msg
      }

      setUser(user);
      // TODO: redirect to home or last visited route
      router.push("/");
    } catch (err) {
      // TODO: handle error with toaster or redirect to error page
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await authService.logout();

      setUser(null);
      // TODO: redirect to login route
      router.push("/login");
    } catch (err) {
      // TODO: handle error with toaster or redirect to error page
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
