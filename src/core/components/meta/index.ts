import { HTMLInputTypeAttribute, ReactNode } from "react";

export type Variant = "primary" | "secondary" | "danger";

export type Size = "sm" | "md" | "lg" | "xl";

export interface InputBaseProps {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
  required?: boolean;
}

export interface SelectInputProps
  extends Omit<InputBaseProps, "type" | "placeholder"> {
  options: { value: string | number; label: string }[];
}

export interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isStatic?: boolean;
}

export interface ModalProps extends OverlayProps {
  title: string;
}

export interface DrawerProps extends OverlayProps {
  title?: string;
}

export interface SpinnerProps {
  color: string;
  fontSize: number;
}

export type CrumbItem = {
  label: ReactNode;
  isLast: boolean;
  path: string;
};

export type BreadcrumbsProps = {
  children: ReactNode;
};

export interface DropdownOption {
  label: string;
  href: string;
}

export interface DropdownProps {
  options: DropdownOption[];
}
