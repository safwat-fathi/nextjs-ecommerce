import { TRatingRange } from "@/core/components/meta";

export interface IProductCard {
  imgSrc: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: TRatingRange;
  totalReviews: number;
}
