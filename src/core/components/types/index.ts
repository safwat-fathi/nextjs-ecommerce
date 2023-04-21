import { HTMLInputTypeAttribute } from "react";

export interface InputBaseProps {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export interface SelectInputProps
  extends Omit<InputBaseProps, "type" | "placeholder"> {
  options: { value: string | number; label: string }[];
}
