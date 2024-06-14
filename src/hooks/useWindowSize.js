"use client";

import { useEffect, useState } from "react";
import debounce from "@mui/material/utils/debounce";
export default function useWindowSize() {
  const [width, setWidth] = useState(0);
  const windowListener = debounce(() => {
    setWidth(window.innerWidth);
  }, 50);
  useEffect(() => {
    if (!window) return;
    setWidth(window.innerWidth);
    window.addEventListener("resize", windowListener);
    return () => {
      window.removeEventListener("resize", windowListener);
    };
  }, [windowListener]);
  return width;
}