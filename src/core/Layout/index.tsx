import React, { ReactNode } from "react";
import ErrorLayout from "./ErrorLayout";
import MainLayout from "./MainLayout";

export enum LayoutsENUM {
  ERROR,
  MAIN,
}

const Layout = ({
  children,
  type,
}: {
  type: LayoutsENUM;
  children: ReactNode;
}) => {
  switch (type) {
    case LayoutsENUM.ERROR:
      return <ErrorLayout>{children}</ErrorLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
};

export default Layout;
