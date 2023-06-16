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
      <div className="flex items-center space-x-4">
        {/* Pages */}
        <Link
          href="/"
          className={`text-white ${router.pathname === "/" ? "font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-white ${
            router.pathname === "/about" ? "font-bold" : ""
          }`}
        >
          About
        </Link>

        <Dropdown options={dropdownOptions}>
          <Link
            href="/categories"
            className={`cursor-pointer ${
              router.pathname === "/categories" ? "font-bold" : ""
            }`}
          >
            Categories
          </Link>
        </Dropdown>
      </div>
    </>
  );
};

export default MenuBar;
