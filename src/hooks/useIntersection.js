import { useEffect, useState } from "react";

const useIntersection = (data, target) => {
  const [observer, setObserver] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callBackObserver = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (
          entry.intersectionRatio >= data.options ? data.options.threshold : 0.5
        ) {
          data.cb();
        }
        return null;
      } else {
        setIsIntersecting(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackObserver, data.options);
    setObserver(observer);
    target && observer.observe(target);
  }, [target]);

  return {
    observer,
    isIntersecting,
  };
};

export default useIntersection;
