import { Dispatch, SetStateAction } from "react";

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  sub?: ICategory[] | null;
  parent?: string | null;
}

export interface ICategoryFilters {
  _id: { in: string[] } | null;
  name: { in: string[] } | null;
}

export interface ICategoriesContext {
  filter: ICategoryFilters;
  categories: ICategory[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setFilter: Dispatch<SetStateAction<ICategoryFilters>>;
  setCategories: Dispatch<SetStateAction<ICategory[]>>;
  error: any;
  isLoading: boolean;
}
