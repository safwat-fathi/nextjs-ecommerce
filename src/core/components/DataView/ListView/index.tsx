import { ReactNode } from "react";

const ListView = ({ children }: { children: ReactNode }) => {
  return <ul className="divide-y">{children}</ul>;
};

export default ListView;
