import { Dispatch, SetStateAction } from "react";

import { TRatingRange } from "@/core/components/types";
import { IBasePaginatedResponse } from "./i-base-response";

export interface IProduct {
  imgSrc: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: TRatingRange;
  totalReviews: number;
}

export interface IProductsFilters {
  brands: { in: string[] };
  categories: { in: string[] };
  price: {
    gte: number | null;
    lte: number | null;
  };
  color?: string;
  size?: string;
}

export interface IProductsContext {
  filter: IProductsFilters;
  products: IProduct[];
  page: number;
  meta: IBasePaginatedResponse["meta"] | null;
  setPage: Dispatch<SetStateAction<number>>;
  setFilter: Dispatch<SetStateAction<IProductsFilters>>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  error: any;
  isLoading: boolean;
}
