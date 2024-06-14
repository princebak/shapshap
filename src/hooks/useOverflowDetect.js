import { useRef, useState, useEffect } from "react";
export default function useOverflowDetect() {
  const elementRef = useRef(null);
  const [isLeftOverflowing, setLeftIsOverflowing] = useState(false);
  const [isRightOverflowing, setRightIsOverflowing] = useState(false);

  function checkOverflow() {
    const element = elementRef.current;

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      if (elementRect.left < 0) setLeftIsOverflowing(true);
      if (elementRect.right > viewportWidth) setRightIsOverflowing(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkOverflow);
    checkOverflow();
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);
  return {
    elementRef,
    isRightOverflowing,
    isLeftOverflowing,
    checkOverflow
  };
}