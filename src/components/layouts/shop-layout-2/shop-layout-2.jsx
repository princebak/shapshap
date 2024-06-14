"use client";

import { usePathname } from "next/navigation";
import { Fragment, useCallback, useState } from "react";
import Divider from "@mui/material/Divider"; 
// GLOBAL CUSTOM COMPONENTS

import Sticky from "components/sticky";
import Topbar from "components/topbar";
import Header from "components/header";
import { Navbar } from "components/navbar";
import { SearchInput } from "components/search-box";
/**
 *  USED IN:
 *  1. GROCERY-1, GROCERY-2, HEALTH-BEAUTY
 *  2. CHECKOUT-ALTERNATIVE
 */

export default function ShopLayout2({
  children
}) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []); 
// FOR HANDLE TOP BAR AREA

  let TOP_BAR_CONTENT = null;
  const SHOW_TOP_BAR = ["/grocery-2", "/health-beauty", "/checkout-alternative"];
  if (SHOW_TOP_BAR.includes(pathname)) TOP_BAR_CONTENT = <Topbar />; 
// FOR HANDLE NAV BAR AREA

  let NAV_BAR_CONTENT = null;
  const SHOW_NAV_BAR = ["/checkout-alternative"];
  if (SHOW_NAV_BAR.includes(pathname)) NAV_BAR_CONTENT = <Navbar elevation={0} />;
  return <Fragment>
      {
      /* TOP BAR AREA */
    }
      {TOP_BAR_CONTENT}

      {
      /* HEADER */
    }
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header isFixed={isFixed} midSlot={<SearchInput />} />
      </Sticky>

      {
      /* NAVIGATION BAR */
    }
      {NAV_BAR_CONTENT ?? <Divider />}

      {
      /* BODY CONTENT */
    }
      {children}
    </Fragment>;
}