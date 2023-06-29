import { ReactNode } from "react";

// TODO: make component generic props for items
const GridView = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};

export default GridView;
