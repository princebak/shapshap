"use client";

import { useEffect, useRef, useState } from "react"; 
// GLOBAL CUSTOM COMPONENTS

import SideNavbar from "components/page-sidenav/side-navbar"; 
// STYLED COMPONENT

import { SidebarContainer } from "./styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function Sidebar({
  children,
  navList
}) {
  const pageContentRef = useRef();
  const [sidebarHeight, setSidebarHeight] = useState(0);
  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);
  return <SidebarContainer>
      {
      /* SIDE NAV BAR */
    }
      <div className="sidenav">
        <SideNavbar lineStyle="dash" navList={navList} sidebarStyle="colored" sidebarHeight={sidebarHeight || "85vh"} />
      </div>

      <div className="pageContent" ref={pageContentRef}>
        {children}
      </div>
    </SidebarContainer>;
}