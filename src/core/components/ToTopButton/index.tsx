import { useEffect, useRef, useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

// TODO: add RTL support
const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
    });

    observer.observe(document.querySelector("#pixel-to-watch")!);

    return () => {
      observer.unobserve(document.querySelector("#pixel-to-watch")!);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-300 ease-in-out w-12 h-12 rounded-full shadow-lg bg-gray-800 text-white focus:outline-none",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon width={20} height={20} color="#fff" icon={faChevronUp} />
    </button>
  );
};

export default ToTopButton;
