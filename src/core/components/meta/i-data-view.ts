import { Dispatch, SetStateAction } from "react";

export interface DataViewProps {
  items: any[];
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}
