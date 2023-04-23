import { HTMLInputTypeAttribute } from "react";

export interface InputBaseProps {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: JSX.Element;
  className?: string;
  required?: boolean;
}

export interface SelectInputProps
  extends Omit<InputBaseProps, "type" | "placeholder"> {
  options: { value: string | number; label: string }[];
}
