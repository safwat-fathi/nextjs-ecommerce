import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  event: "mousedown" | "mouseup" = "mousedown"
) => {
  const handleClickOutside = (event: MouseEvent) => {
    // Do nothing if clicking ref's element or descendent elements
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener(event, handleClickOutside);
    return () => {
      document.removeEventListener(event, handleClickOutside);
    };
  }, []);

  return ref;
};
