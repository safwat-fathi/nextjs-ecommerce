import { PropsWithChildren } from "react";
import clsx from "clsx";

import { BtnProps } from "../meta/i-button";

const classes = {
  size: {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-8 py-3 text-lg",
    xl: "px-8 py-3 text-xl",
  },
  variant: {
    primary:
      "bg-primary-500 hover:bg-primary-800 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 text-white",
    secondary:
      "bg-secondary-500 hover:bg-secondary-800 focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 text-white-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = ({
  pill = false,
  size = "md",
  variant = "primary",
  disabled = false,
  children,
  ...props
}: PropsWithChildren<BtnProps>) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        `focus:outline-none transition ease-in-out duration-300 rounded ${classes.size[size]} ${classes.variant[variant]}}`,
        { "opacity-50 cursor-not-allowed": disabled, "rounded-full": pill }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
