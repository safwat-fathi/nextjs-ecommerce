import { HTMLInputTypeAttribute, ReactNode } from "react";

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
  children: ReactNode;
}
export interface ModalProps extends OverlayProps {
  title: string;
}

export interface SpinnerProps {
  color: string;
  fontSize: number;
}

export interface SkeletonProps {
  type: "grid" | "list";
}

export type CrumbItem = {
  label: ReactNode;
  isLast: boolean;
  path: string;
};

export type BreadcrumbsProps = {
  children: ReactNode;
};