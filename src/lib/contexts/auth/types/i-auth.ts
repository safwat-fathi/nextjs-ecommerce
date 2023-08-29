import { Dispatch } from "react";
import { IUser } from "../../types";

export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IAuth {
  // token: string | null;
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export enum AuthActionsTypes {
  LOGIN,
  LOGOUT,
  LOADING_START,
  LOADING_END,
  SET_AUTHENTICATED,
}

export interface IAuthAction {
  type: AuthActionsTypes;
}

export interface ILoginAction extends IAuthAction {
  // payload: {
  //   // accessToken: string;
  //   user: IUser;
  // };
  payload: IUser;
}

export interface IAuthenticatedAction extends IAuthAction {
  payload: boolean;
}

// export interface ILogoutAction extends IAuthAction {
//   payload: null;
// }

export type TAuthActions = ILoginAction | IAuthenticatedAction;

export interface IAuthContext {
  state: IAuth;
  dispatch: Dispatch<TAuthActions>;
}
