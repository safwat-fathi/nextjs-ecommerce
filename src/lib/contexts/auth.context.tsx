import { AuthService } from "@/services/auth.service";

import { useRouter } from "next/router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAuthContext, IUser } from "./types";

const AuthContext = createContext<IAuthContext>({
  user: null,
  isAuthenticated: false,
  loading: false,
  login: async () => {},
  logout: async () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();
  const authService = new AuthService();

  useEffect(() => {
    // TODO: check if user already logged in useEffect (from localStorage)
    // TODO: if logged update isAuthenticated & user
    console.log(user);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const user = await authService.login(email, password);
      // TODO: add user token to local storage

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
      setIsAuthenticated(false);
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
      value={{
        user,
        loading,
        isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
