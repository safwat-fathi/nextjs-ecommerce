import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
import { getStorage } from "@/lib/utils";

const Navbar = ({ isAuth }: { isAuth: boolean }) => {
  console.log("🚀 ~ Navbar ~ isAuth:", isAuth);
  // const userSignedIn = !!getStorage("accessToken");
  const userSignedIn = true;
  // console.log("🚀 ~ Navbar ~ userSignedIn:", userSignedIn);

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="md:w-48 flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={150}
            height={250}
            alt="company logo"
          />
        </Link>
      </div>

      <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden md:flex items-center h-12">
        <select className="form-select bg-transparent focus:outline-none focus:ring-0 uppercase font-bold text-sm border-0">
          <option>All Categories</option>
          <option>Men Cloths</option>
          <option>Women Cloths</option>
          <option>Men Shoes</option>
          <option>Women Shoes</option>
        </select>
        <input
          type="text"
          className="form-input focus:outline-none focus:ring-0 bg-transparent font-semibold text-sm border-0"
          placeholder="I'm searching for ..."
        />
        <button
          role="button"
          className="w-8 h-full text-gray-500"
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
        </button>
      </div>

      <div className="lg:max-w-sm hidden lg:flex flex-col place-items-end">
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
