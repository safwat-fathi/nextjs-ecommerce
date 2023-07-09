import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown";
import { DropdownOption } from "../meta";

const dropdownOptions: DropdownOption[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const MenuBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-center items-center gap-4">
        {/* Pages */}
        <Link
          href="/"
          className={` ${
            router.pathname === "/" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={` ${
            router.pathname === "/about" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          About
        </Link>

        <Link
          href="/shop"
          className={` ${
            router.pathname === "/shop" ? "font-bold text-white" : ""
          } hover:text-white`}
        >
          Shop
        </Link>

        <Dropdown options={dropdownOptions}>
          <Link
            href="/categories"
            className={`cursor-pointer ${
              router.pathname === "/categories" ? "font-bold text-white" : ""
            } hover:text-white`}
          >
            Categories
          </Link>
        </Dropdown>
      </div>
    </>
  );
};

export default MenuBar;
