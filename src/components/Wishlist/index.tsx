import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Button from "@/core/components/Button";

// TODO: on click on image redirect to product page
const Wishlist = () => {
  const data = [
    {
      id: 0,
      img: "/images/products/product6.jpg",
      name: "ITALIAN L SHAPE",
      inStock: true,
      price: 320.0,
    },
    {
      id: 1,
      img: "/images/products/product5.jpg",
      name: "DINING TABLE",
      inStock: true,
      price: 120.5,
    },
    {
      id: 2,
      img: "/images/products/product10.jpg",
      name: "SOFA",
      inStock: false,
      price: 620,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        {data.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
          >
            <div className="w-28">
              <Image
                width={200}
                height={150}
                src={item.img}
                alt={item.name}
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm">
                Availability:{" "}
                {item.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">
              ${item.price}
            </div>
            <Button size="sm" disabled={!item.inStock}>
              add to cart
            </Button>

            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        ))}
        <Link href="/profile/wishlist">Check your whole list &gt;</Link>
      </div>
    </>
  );
};

export default Wishlist;
