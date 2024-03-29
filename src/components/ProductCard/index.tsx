import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Rating from "@/core/components/Rating";
import { IProduct } from "@/types/i-product";
import Typography from "@/core/components/Typography";

const ProductCard = ({
  price,
  rating,
  // description,
  thumbnail,
  name,
  slug,
}: // totalReviews,
// oldPrice,
Partial<IProduct>) => {
  const router = useRouter();

  return (
    <div className="bg-white relative shadow rounded-md overflow-hidden group h-80">
      <div className="flex flex-col justify-between bg-white shadow rounded group h-full">
        <div className="relative h-40">
          <Image
            width={200}
            height={200}
            src={thumbnail!}
            alt="product 1"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <Link
              href={`/shop/${slug}`}
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
          <Typography title={name} size="md">
            {name}
          </Typography>
          {/* <p className="uppercase font-medium text-lg mb-2 text-gray-800 hover:text-primary transition">
              {name}
            </p> */}
          <div className="flex items-baseline mb-1 space-x-2">
            <Typography size="md" className="text-primary font-semibold">
              {price}$
            </Typography>
            {/* <p className="text-xl text-primary font-semibold">${price}</p> */}
            {/* <p className="text-sm text-gray-400 line-through">${oldPrice}</p> */}
          </div>
          <div className="flex items-center">
            <Rating rating={rating!} />
            {/* <p className="text-xs text-gray-500 ml-3">({totalReviews})</p> */}
          </div>
        </div>
        <button
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          onClick={() => {
            console.log("add to cart");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
