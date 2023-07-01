import { Dispatch, SetStateAction } from "react";

export interface DataViewProps<T = any> {
  error: unknown;
  isLoading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}
