import { ButtonHTMLAttributes } from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
}
