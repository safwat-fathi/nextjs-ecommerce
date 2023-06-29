import { ReactNode } from "react";

// TODO: make component generic props for items
const GridViewItem = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white p-4 rounded-lg shadow-md">{children}</div>;
};

export default GridViewItem;
