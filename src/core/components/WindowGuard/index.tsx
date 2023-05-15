import { ReactNode } from "react";

interface WindowGuardProps {
  children: ReactNode;
}

const WindowGuard = ({ children }: WindowGuardProps) => {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    return null;
  }

  return <>{children}</>;
};

export default WindowGuard;
