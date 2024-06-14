import Image from "next/image";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery"; 
// Local CUSTOM COMPONENTS

import LogoArea from "./logo-area";
import LayoutDrawer from "../../layout-drawer";
import MultiLevelMenu from "./multi-level-menu"; 
// LOCAL CUSTOM HOOK

import { useLayout } from "../dashboard-layout-context"; 
// STYLED COMPONENT

import { SidebarWrapper } from "./styles";
export default function DashboardSidebar() {
  const {
    sidebarCompact,
    TOP_HEADER_AREA,
    showMobileSideBar,
    handleSidebarHover,
    handleCloseMobileSidebar
  } = useLayout();
  const downLg = useMediaQuery(theme => theme.breakpoints.down("lg"));

  if (downLg) {
    return <LayoutDrawer open={showMobileSideBar ? true : false} onClose={handleCloseMobileSidebar}>
        <Box p={2} maxHeight={TOP_HEADER_AREA}>
          <Image alt="Logo" width={105} height={50} src="/assets/images/logo.svg" style={{
          marginLeft: 8
        }} />
        </Box>

        <MultiLevelMenu />
      </LayoutDrawer>;
  }

  return <SidebarWrapper compact={sidebarCompact ? 1 : 0} onMouseEnter={() => handleSidebarHover(true)} onMouseLeave={() => sidebarCompact && handleSidebarHover(false)}>
      {
      /* SIDEBAR TOP LOGO SECTION */
    }
      <LogoArea />

      {
      /* SIDEBAR NAVIGATION SECTION */
    }
      <MultiLevelMenu />
    </SidebarWrapper>;
}