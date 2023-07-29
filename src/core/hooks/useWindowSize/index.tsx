import { useEffect, useRef, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

interface ResizeObserver {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
}

const useWindowSize = (element?: HTMLElement | null) => {
  const isBrowser = typeof window !== "undefined";
  const resizeObserver = useRef<ResizeObserver>();
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const targetElement = element ?? document.body;

    if (isBrowser) {
      resizeObserver.current = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setWindowSize({ width, height });
      });

      resizeObserver.current.observe(targetElement);
    }

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.unobserve(targetElement);
      }
    };
  }, [element]);

  return windowSize;
};

export default useWindowSize;
