import React, { ReactNode } from "react";
import ErrorLayout from "./ErrorLayout";
import MainLayout from "./MainLayout";

export enum LayoutsENUM {
  MAIN,
  CLEAN,
}

const Layout = ({
  children,
  type,
}: {
  type: LayoutsENUM;
  children: ReactNode;
}) => {
  switch (type) {
    case LayoutsENUM.CLEAN:
      return <ErrorLayout>{children}</ErrorLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
};

export default Layout;
