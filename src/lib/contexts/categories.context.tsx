import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";

import { fetcher } from "@/core/lib/data-fetcher";

import {
  ICategoriesContext,
  ICategory,
  ICategoryFilters,
} from "@/types/i-category";

const INITIAL_FILTERS: ICategoryFilters = {
  _id: null,
  name: null,
};

const CategoriesContext = createContext<ICategoriesContext>({
  filter: INITIAL_FILTERS,
  categories: [],
  setFilter: () => {},
  setCategories: () => {},
  page: 1,
  setPage: () => {},
  error: null,
  isLoading: true,
});

const useCategories = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filter, setFilter] = useState<ICategoryFilters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<any>(
    ["/category", page, filter],
    ([url, page, filter]: [string, number, ICategoryFilters]) =>
      fetcher(url, { params: { filter, page } })
  );

  useEffect(() => {
    if (!isLoading) setCategories(data);
  }, [data]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        filter,
        page,
        setFilter,
        setCategories,
        setPage,
        error,
        isLoading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider, useCategories };
