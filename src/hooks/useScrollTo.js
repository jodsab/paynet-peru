import { useCallback } from "react";

const useScrollToRef = (ref) => {
  const scrollToRef = useCallback(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [ref]);

  return scrollToRef;
};

export default useScrollToRef;
