export interface IUser {
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
  address: string[];
  orders: any[];
  id: string;
}

export interface IUserData {
  accessToken: string;
  user: IUser;
}
