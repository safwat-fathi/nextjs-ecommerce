import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";
import * as Yup from "yup";

export interface InputBaseProps {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  validationSchema: Yup.AnyObject;
}

export interface SelectInputProps extends InputBaseProps {
  options: { value: string; label: string }[];
}
