import { IBasePaginatedResponse } from "@/types/i-base-response";
import { Dispatch, SetStateAction } from "react";

export interface IDataView {
  error: unknown;
  isLoading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  meta: IBasePaginatedResponse["meta"] | null;
  changView?: boolean;
  hasPagination?: boolean;
  isGrid?: boolean;
  setIsGrid?: Dispatch<SetStateAction<boolean>>;
}
