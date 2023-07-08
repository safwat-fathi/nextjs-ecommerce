import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Rating from "@/core/components/Rating";

import { IProductCard } from "../meta/i-product-card";

const ProductCard = () => {
  // const ProductCard = ({
  //   imgSrc,
  //   price,
  //   review,
  //   title,
  //   totalReviews,
  //   oldPrice,
  // }: IProductCard) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="relative rounded-md overflow-hidden group">
      <div className="bg-white shadow rounded group">
        <div className="relative">
          <Image
            width={200}
            height={200}
            src="/images/logo.svg"
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <Link
              href="#"
              className="text-white text-lg px-4 rounded-full bg-primary flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <Image
                className="text-white"
                src="/icons/magnifier.svg"
                width={20}
                height={20}
                alt="search"
              />
              view product
            </Link>
            <Link
              href="#"
              className="text-white text-lg px-4 rounded-full bg-primary flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <Image
                className="text-white"
                src="/icons/heart.svg"
                width={20}
                height={20}
                alt="search"
              />
              add to wishlist
            </Link>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <Link href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              Guyer Chair
            </h4>
          </Link>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <Rating rating={2} canBeUpdated />
        </div>
        <button
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          onClick={() => {
            console.log("awdawdawd");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
