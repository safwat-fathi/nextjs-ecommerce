import { useEffect, useState } from "react";
import useSWR from "swr";

import { fetcher } from "../lib/data-fetcher";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState<{
    color: string;
    size: string;
    brand: string;
  } | null>(null); // eg. filters = { size: 'large', availability: 'instock' }
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR<any>(
    `https://testapi.com/products?offset=${page}&limit=10&color=${filters?.color}&size=${filters?.size}&brand=${filters?.brand}`,
    fetcher
  );

  // Loop filters and filter product
  useEffect(() => {
    if (!isLoading) setProducts(data);
  }, [data]);

  return { products, setFilters, error, isLoading, page, setPage };
};

export default useProducts;
