import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";

import { fetcher } from "@/core/lib/data-fetcher";

import { IProductsContext, IProductsFilters } from "./types/index";

// import { objToURLParams } from "../utils/string";

import { IProduct } from "@/types/i-product";
import { IBasePaginatedResponse } from "@/types/i-base-response";

const INITIAL_FILTERS: IProductsFilters = {
  brands: { in: [] },
  categories: { in: [] },
  price: {
    gte: null,
    lte: null,
  },
};

const ProductsContext = createContext<IProductsContext>({
  filter: INITIAL_FILTERS,
  products: [],
  setFilter: () => {},
  setProducts: () => {},
  page: 1,
  setPage: () => {},
  meta: null,
  error: null,
  isLoading: true,
});

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<IProductsFilters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<IBasePaginatedResponse["meta"] | null>(null);

  const { data, error, isLoading } = useSWR(
    ["/products", page, filter],
    ([url, page, filter]: [string, number, IProductsFilters]) =>
      fetcher(url, { params: { filter, page } })
  );

  useEffect(() => {
    if (!isLoading) {
      setProducts((data as IBasePaginatedResponse).data);
      setMeta((data as IBasePaginatedResponse).meta);
    }
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filter,
        page,
        setFilter,
        setProducts,
        setPage,
        error,
        isLoading,
        meta,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider, useProducts };
