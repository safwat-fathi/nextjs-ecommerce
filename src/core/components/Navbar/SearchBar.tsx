import Link from "next/link";
import Drawer from "../Drawer";
import { useState } from "react";

const SearchBar = () => {
  const userSignedIn = true;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="text-white">Logo</div>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 border border-gray-300 rounded"
        />
        {/* check user state */}
        {userSignedIn ? (
          <div className="flex items-center space-x-2">
            <Link href="/profile" className="text-white">
              Profile
            </Link>
            <button onClick={() => setIsFavOpen(true)} className="text-white">
              Favorites
            </button>
            <button onClick={() => setIsCartOpen(true)} className="text-white">
              Cart
            </button>
          </div>
        ) : (
          <Link href="/signup" className="text-white">
            Sign Up
          </Link>
        )}
      </div>

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
        title="Favorites"
        isOpen={isFavOpen}
        isStatic={false}
        onClose={() => {
          setIsFavOpen(false);
        }}
      >
        <h1>Favorites</h1>
      </Drawer>
    </>
  );
};

export default SearchBar;
