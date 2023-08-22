import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AuthActionsTypes, IAuth, IAuthContext } from "./types/i-auth";
import { AuthReducer } from "./reducer";
import { getStorage } from "@/lib/utils";

const initialState: IAuth = {
  token: null,
  user: null,
  isAuthenticated: false,
  loading: false,
};

const AuthContext = createContext<IAuthContext>({
  state: initialState,
  dispatch: () => null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // const router = useRouter();

  // useEffect(() => {
  //   // TODO: check if user already logged in useEffect (from localStorage)
  //   // TODO: if logged update isAuthenticated & user
  //   const isAuth = !!getStorage("accessToken") as unknown;
  //   console.log("AuthProvider::isAuth", isAuth);

  //   if (isAuth) {
  //     const accessToken = getStorage("accessToken") as string;
  //     console.log("🚀 ~ useEffect ~ accessToken:", accessToken);
  //     const user = getStorage("user") as any;
  //     console.log("🚀 ~ useEffect ~ user:", user);
  //     dispatch({
  //       type: AuthActionsTypes.LOGIN,
  //       payload: { accessToken, user },
  //     });
  //   } else {
  //     console.log("AuthProvider::", "no auth found");
  //   }
  // }, []);

  // const handleLogin = async (email: string, password: string) => {
  //   try {
  //     setLoading(true);
  //     const user = await authService.login(email, password);
  //     // TODO: add user token to local storage

  //     if (!user) {
  //       console.log("no user found");
  //       // TODO: show error msg
  //     }

  //     setUser(user);
  //     // TODO: redirect to home or last visited route
  //     router.push("/");
  //   } catch (err) {
  //     // TODO: handle error with toaster or redirect to error page
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleLogout = async () => {
  //   try {
  //     setLoading(true);
  //     await authService.logout();

  //     setUser(null);
  //     setIsAuthenticated(false);
  //     // TODO: redirect to login route
  //     router.push("/login");
  //   } catch (err) {
  //     // TODO: handle error with toaster or redirect to error page
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
