import { Dispatch } from "react";
import { IUser } from "../../types";

export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IAuth {
  token: string | null;
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export enum AuthActionsTypes {
  LOGIN,
  LOGOUT,
  LOADING_START,
  LOADING_END,
}

export interface IAuthAction {
  type: AuthActionsTypes;
}

export interface ILoginAction extends IAuthAction {
  payload: {
    accessToken: string;
    user: IUser;
  };
}

// export interface ILogoutAction extends IAuthAction {
//   payload: null;
// }

export type TAuthActions = ILoginAction;

export interface IAuthContext {
  state: IAuth;
  dispatch: Dispatch<TAuthActions>;
}
