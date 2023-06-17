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
            src="/images/logo.svg"
            width={150}
            height={250}
            alt="company logo"
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
        <span
          role="button"
          className="ml-auto px-4 text-gray-500"
          onClick={() => {
            console.log("search for::");
          }}
        >
          <Image
            src="/icons/magnifier.svg"
            width={20}
            height={20}
            alt="search"
          />
        </span>
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
  );
};

export default Navbar;
