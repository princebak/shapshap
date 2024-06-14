import { useCallback, useEffect, useState } from "react";
export default function useScroller(ref) {
  const [isFixedHeader, setIsFixedHeader] = useState(false); 
// handle window scroller

  const scroller = useCallback(() => {
    let postionHeight = 0;

    if (ref.current) {
      postionHeight = ref.current.offsetTop + ref.current.offsetHeight;
    }

    if (postionHeight && window.pageYOffset > postionHeight) {
      setIsFixedHeader(true);
      return;
    }

    setIsFixedHeader(false);
  }, [ref]);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [scroller]);
  return {
    isFixedHeader
  };
}