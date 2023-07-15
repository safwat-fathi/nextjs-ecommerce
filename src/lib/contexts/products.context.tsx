import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";

import { fetcher } from "@/core/lib/data-fetcher";

import { IProductsContext, IProductsFilters } from "./types/index.";

import { objToURLParams } from "../utils/string";

import { IProduct } from "@/types/i-products";

const ProductsContext = createContext<IProductsContext>({
  filters: {
    brands: [],
    categories: [],
    price: {
      gte: null,
      lte: null,
    },
  },
  products: [],
  setFilters: () => {},
  setProducts: () => {},
  page: 1,
  setPage: () => {},
  error: null,
  isLoading: true,
});

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<IProductsFilters>({
    brands: [],
    categories: [],
    price: {
      gte: null,
      lte: null,
    },
  });
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<any>(
    `/products?${objToURLParams(filters)}`,
    fetcher
  );

  useEffect(() => {
    if (!isLoading) setProducts(data);
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filters,
        page,
        setFilters,
        setProducts,
        setPage,
        error,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider, useProducts };
