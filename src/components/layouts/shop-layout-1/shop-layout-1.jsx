"use client";

import { Fragment, useCallback, useState } from "react";
// GLOBAL CUSTOM COMPONENTS

import Sticky from "components/sticky";
import Topbar from "components/topbar";
import { Navbar } from "components/navbar";
import { Footer1 } from "components/footer";
import Header from "components/header/header";
import { SearchInputWithCategory } from "components/search-box";
import { MobileNavigationBar } from "components/mobile-navigation";

export default function ShopLayout1({ children }) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      {/* TOP BAR SECTION */}
      <Topbar />

      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} midSlot={<SearchInputWithCategory />} />
      </Sticky>

      {/* NAVIGATION BAR */}
      <Navbar elevation={0} border={1} />

      {/* BODY CONTENT */}
      {children}

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar />

      {/* FOOTER */}
      <Footer1 />
    </Fragment>
  );
}
