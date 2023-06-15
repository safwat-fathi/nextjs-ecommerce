import { PropsWithChildren, useState } from "react";
import { DropdownOption, DropdownProps } from "../meta";
import Link from "next/link";

const Dropdown = ({ options, children }: PropsWithChildren<DropdownProps>) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    // onSelect(option.value);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <div className="flex items-center w-full text-white">
          {children}
          <svg
            className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          role="menu"
          className="origin-top-right absolute hidden group-hover:block right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-1"
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
