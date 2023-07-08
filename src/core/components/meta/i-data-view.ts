import { Dispatch, SetStateAction } from "react";

export interface IDataView {
  error: unknown;
  isLoading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  changView?: boolean;
  isGrid?: boolean;
  setIsGrid?: Dispatch<SetStateAction<boolean>>;
}
