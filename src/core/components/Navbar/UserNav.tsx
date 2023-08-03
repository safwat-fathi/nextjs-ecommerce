import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Drawer from "../Drawer";
import Wishlist from "@/components/Wishlist";

const UserNav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <>
      <nav className="contents">
        <ul className="w-48 flex items-center justify-end gap-4">
          <li className="relative">
            <Link href="/profile">
              <Image
                src="/icons/user.svg"
                alt="user icon"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li className="relative">
            <button onClick={() => setIsWishlistOpen(true)}>
              <div className="absolute -top-3 -right-2 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                3
              </div>
              <Image
                src="/icons/heart.svg"
                alt="user icon"
                width={30}
                height={30}
              />
            </button>
          </li>
          <li className="relative">
            <button onClick={() => setIsCartOpen(true)}>
              <div className="absolute -top-3 -right-2 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                12
              </div>
              <Image
                src="/icons/shopping-cart.svg"
                alt="shopping-cart"
                width={30}
                height={30}
              />
            </button>
          </li>
        </ul>
      </nav>
      <Drawer
        key="awdawd"
        title="Cart"
        isOpen={isCartOpen}
        isStatic={false}
        onClose={() => {
          setIsCartOpen(false);
        }}
      >
        <h1>Cart</h1>
      </Drawer>

      <Drawer
        key="aw"
        title="My Wishlist"
        isOpen={isWishlistOpen}
        isStatic={false}
        onClose={() => {
          setIsWishlistOpen(false);
        }}
      >
        <Wishlist />
      </Drawer>
    </>
  );
};

export default UserNav;
