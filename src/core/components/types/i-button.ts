import { ButtonHTMLAttributes } from "react";
import { Size, Variant } from ".";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  pill?: boolean;
}
