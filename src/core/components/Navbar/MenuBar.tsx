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

        {/* <div
          className="relative inline-block text-white"
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
        >
          <Link
            href="/categories"
            className={`cursor-pointer ${
              router.pathname === "/categories" ? "font-bold" : ""
            }`}
          >
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            </svg>
          </Link>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-gray-800 py-2 mt-1 rounded-md">
              <ul>
                <li>
                  <Link href="/services/service1" className="text-white">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link href="/services/service2" className="text-white">
                    Service 2
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div> */}

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
