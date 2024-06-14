import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import debounce from "lodash/debounce";
export default function useHeader() {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));

  const toggleSidenav = () => setOpen(open => !open);

  const scrollListener = debounce(() => {
    if (window.scrollY >= 72) setFixed(true);else setFixed(false);
  }, 50);
  useEffect(() => {
    if (!window) return null;
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);
  return {
    open,
    isFixed,
    downSM,
    toggleSidenav
  };
}