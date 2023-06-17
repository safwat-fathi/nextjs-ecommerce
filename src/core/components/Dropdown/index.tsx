import { PropsWithChildren } from "react";
import { DropdownProps } from "../meta";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ options, children }: PropsWithChildren<DropdownProps>) => {
  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <div className="flex items-center w-full">
          {children}
          <Image
            className="ms-2 text-blue-700 transition-transform duration-200 group-hover:rotate-180"
            src="/icons/chevron.svg"
            alt="chevron"
            width={25}
            height={25}
          />
        </div>
        <div
          role="menu"
          className="origin-top-right absolute hidden group-hover:block rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map(option => (
              <Link
                key={option.label}
                href={option.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
