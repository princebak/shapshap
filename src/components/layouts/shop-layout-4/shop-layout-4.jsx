"use client";

import { Fragment, useCallback, useState } from "react"; 
// GLOBAL CUSTOM COMPONENTS

import Sticky from "components/sticky";
import Topbar from "components/topbar";
import Header from "components/header/header";
import StickyWrapper from "components/sticky-wrapper";
import { SearchInputWithCategory } from "components/search-box";
import { MobileNavigationBar } from "components/mobile-navigation";
import SideNavbarTwo from "components/page-sidenav/side-navbar-2"; 
// LOCAL CUSTOM COMPONENTS

import Footer from "./footer"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ShopLayout4({
  children,
  navigation
}) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []); 
// SIDEBAR CONTENT

  const Sidebar = <Fragment>
      <SideNavbarTwo navigation={navigation} />
      <Footer />
    </Fragment>;
  return <div className="bg-white">
      {
      /* TOP BAR SECTION */
    }
      <Topbar />

      {
      /* HEADER */
    }
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header isFixed={isFixed} midSlot={<SearchInputWithCategory />} />
      </Sticky>

      {
      /* BODY CONTENT */
    }
      <StickyWrapper SideNav={Sidebar}>{children}</StickyWrapper>

      {
      /* SMALL DEVICE BOTTOM NAVIGATION */
    }
      <MobileNavigationBar />
    </div>;
}