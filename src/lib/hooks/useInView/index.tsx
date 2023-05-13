import { RefObject, useEffect, useRef, useState } from "react";

const useInView = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
};

export default useInView;
