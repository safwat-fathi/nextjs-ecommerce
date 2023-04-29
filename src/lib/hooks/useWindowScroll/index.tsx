import { useState, useEffect } from "react";

interface WindowScrollPosition {
  x: number;
  y: number;
}

const useWindowScroll = (): WindowScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<WindowScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useWindowScroll;
