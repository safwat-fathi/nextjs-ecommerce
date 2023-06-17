import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";

const Navbar = () => {
  const userSignedIn = true;

  return (
    <div className="container mx-auto px-4 py-8 flex items-center">
      <div className="mr-auto md:w-48 flex-shrink-0">
        <Link href="/">
          <Image
            className="h-8 md:h-10"
            src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
            width={120}
            height={100}
            priority={true}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
        <select className="focus:outline-none bg-transparent uppercase font-bold text-sm p-4 mr-4">
          <option>All Categories</option>
          <option>Men Cloths</option>
          <option>Women Cloths</option>
          <option>Men Shoes</option>
          <option>Women Shoes</option>
        </select>
        <input
          className="focus:outline-none bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
        />
        <svg
          className="ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={() => {
            console.log("search for::");
          }}
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          ></path>
        </svg>
      </div>

      <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
        <span className="font-bold md:text-xl">8 800 332 65-66</span>
        <span className="font-semibold text-sm text-gray-400">
          Support 24/7
        </span>
      </div>

      {userSignedIn ? <UserNav /> : <GuestNav />}

      {/* <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Your Cart</span>
          <span>$2,650,59</span>
        </div> */}
    </div>
    // <header className="bg-white">
    // </header>
  );
};

export default Navbar;
