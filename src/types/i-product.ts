import { Dispatch, SetStateAction } from "react";

import { TRatingRange } from "@/core/components/types";
import { IBasePaginatedResponse, IBaseResponseMeta } from "./i-base-response";
import { TNullable } from "./app";

export interface IProduct {
  // imgSrc: string;
  // title: string;
  // price: number;
  // oldPrice?: number;
  // rating: TRatingRange;
  // totalReviews: number;
  _id: string;
  name: string;
  brand: string;
  description: string;
  slug: string;
  price: number;
  stock: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  categories: string[];
}

export interface IProductsFilters {
  brand: { in: string[] };
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
  meta: TNullable<IBaseResponseMeta>;
  setPage: Dispatch<SetStateAction<number>>;
  setFilter: Dispatch<SetStateAction<IProductsFilters>>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  error: any;
  isLoading: boolean;
}
