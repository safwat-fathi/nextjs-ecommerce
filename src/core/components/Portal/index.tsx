import useGlobalRef from "@/lib/hooks/useGlobalRef";
import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  const portalRef = useGlobalRef(
    document.querySelector<HTMLElement>("#portal")!
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (portalRef) {
    return (
      mounted && portalRef.current && createPortal(children, portalRef.current)
    );
  }

  return null;
};
