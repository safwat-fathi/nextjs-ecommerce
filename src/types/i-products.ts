import { Dispatch, SetStateAction } from "react";

import { TRatingRange } from "@/core/components/types";

export interface IProduct {
  imgSrc: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: TRatingRange;
  totalReviews: number;
}

export interface IProductsFilters {
  brands: string[];
  categories: string[];
  price: {
    gte: number | null;
    lte: number | null;
  };
  color?: string;
  size?: string;
}

export interface IProductsContext {
  filters: IProductsFilters;
  products: IProduct[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setFilters: Dispatch<SetStateAction<IProductsFilters>>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  error: any;
  isLoading: boolean;
}
