import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll: IntersectionObserverCallback = ([entry]) => {
    console.log("🚀 ~ useScrollPosition ~ entry:", entry);

    setScrollPosition({
      x: window.pageXOffset,
      y: entry.intersectionRatio * window.innerHeight,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      // threshold: 1.0,
      // threshold: [0, 1],
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
