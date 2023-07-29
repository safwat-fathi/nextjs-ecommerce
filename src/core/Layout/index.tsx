import { ReactNode } from "react";

import ErrorLayout from "./ErrorLayout";
import MainLayout from "./MainLayout";
import ProfileLayout from "./ProfileLayout";

export enum LayoutsENUM {
  MAIN,
  CLEAN,
  PROFILE,
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
    case LayoutsENUM.PROFILE:
      return <ProfileLayout>{children}</ProfileLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
};

export default Layout;
