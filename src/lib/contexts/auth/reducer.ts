import { IUser } from "../types";
import { AuthActionsTypes, IAuth, TAuthActions } from "./types/i-auth";

export const AuthReducer = (state: IAuth, action: TAuthActions): IAuth => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionsTypes.LOGIN:
      if (payload) {
        return {
          ...state,
          isAuthenticated: true,
          // token: payload.accessToken,
          user: payload as IUser,
        };
      }

      throw new Error("invalid payload type@AuthReducer");

    case AuthActionsTypes.SET_AUTHENTICATED:
      return { ...state, isAuthenticated: payload as boolean };

    case AuthActionsTypes.LOGOUT:
      return { ...state, isAuthenticated: false };

    case AuthActionsTypes.LOADING_START:
      return { ...state, loading: true };

    case AuthActionsTypes.LOADING_END:
      return { ...state, loading: false };

    default:
      return state;
  }
};
