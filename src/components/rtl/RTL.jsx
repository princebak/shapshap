"use client";

import { useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis"; 
// GLOBAL CUSTOM HOOKS

import useSettings from "hooks/useSettings";
export default function RTL({
  children
}) {
  const {
    settings
  } = useSettings();
  useEffect(() => {
    document.dir = settings.direction;
  }, [settings.direction]);
  const cacheRtl = createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

  if (settings.direction === "rtl") {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
}