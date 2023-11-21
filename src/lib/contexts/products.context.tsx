import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";

// import { fetcher } from "@/core/lib/data-fetcher";

import { IProductsContext, IProductsFilters } from "./types/index";

// import { objToURLParams } from "../utils/string";

import { IProduct } from "@/types/i-product";
import {
  IBasePaginatedResponse,
  IBaseResponseMeta,
} from "@/types/i-base-response";
import { ROUTES } from "@/routes";
import { TNullable } from "@/types/app";
import HttpClient from "@/core/lib/http-client";

const httpClient = new HttpClient();

const INITIAL_FILTERS: IProductsFilters = {
  brand: { in: [] },
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

const ProductsProvider = ({
  initialData,
  children,
}: {
  initialData: IBasePaginatedResponse<IProduct>;
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>(initialData?.data);
  const [filter, setFilter] = useState<IProductsFilters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<TNullable<IBaseResponseMeta>>(
    initialData?.meta
  );

  const {
    data: productsData,
    error,
    isLoading,
  } = useSWR(
    [ROUTES.products.index, page, filter],
    ([url, page, filter]: [string, number, IProductsFilters]) =>
      httpClient.get<IBasePaginatedResponse<IProduct>>(url, {
        params: { filter, page },
      }),
    {
      fallbackData: initialData,
      revalidateOnFocus: false,
      revalidateOnMount: false,
    }
  );

  useEffect(() => {
    if (!isLoading && productsData?.success) {
      setProducts(productsData.data);
      setMeta(productsData.meta);
    }
  }, [productsData, isLoading]);

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

export { ProductsProvider, useProducts };
