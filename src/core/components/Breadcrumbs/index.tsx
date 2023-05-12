import Link from "next/link";
import { BreadcrumbsProps } from "../types";
import { Children, Fragment } from "react";

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const childrenArray = Children.toArray(children);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="flex gap-2 items-start" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">{childrenWithSeparator}</ol>
    </nav>
  );
};

export default Breadcrumbs;
