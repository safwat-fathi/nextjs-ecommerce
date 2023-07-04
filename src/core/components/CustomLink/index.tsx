import { HTMLProps, PropsWithChildren } from "react";
import { BtnProps } from "../meta/i-button";
import clsx from "clsx";

const classes = {
  size: {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-primary-500 hover:bg-primary-800 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = ({
  pill,
  size,
  variant,
  disabled,
  children,
  ...props
}: PropsWithChildren<BtnProps>) => {
  return (
    <button
      className={clsx(
        `focus:outline-none transition ease-in-out duration-300 ${classes.size[size]} ${classes.variant[variant]}}`,
        { disabled: "opacity-50 cursor-not-allowed", pill: "rounded-full" }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
