import { usePathname, useRouter } from "next/navigation";
import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENT

import Scrollbar from "components/scrollbar"; 
// Local CUSTOM COMPONENT

import SidebarAccordion from "./sidebar-accordion"; 
// LOCAL CUSTOM HOOKS

import { useLayout } from "../dashboard-layout-context"; 
// SIDEBAR NAVIGATION LIST

import { navigation } from "../dashboard-navigation"; 
// STYLED COMPONENTS

import { ListLabel, BadgeValue, StyledText, BulletIcon, ExternalLink, NavItemButton, ListIconWrapper } from "./styles";
export default function MultiLevelMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    COMPACT,
    TOP_HEADER_AREA,
    handleCloseMobileSidebar
  } = useLayout(); 
// HANDLE ACTIVE CURRENT PAGE

  const activeRoute = path => pathname === path ? 1 : 0; 
// HANDLE NAVIGATE TO ANOTHER ROUTE & CLOSE SIDEBAR DRAWER IN MOBILE DEVICE


  const handleNavigation = path => {
    router.push(path);
    handleCloseMobileSidebar();
  };

  const renderLevels = data => {
    return data.map((item, index) => {
      if (item.type === "label") {
        return <ListLabel key={index} compact={COMPACT}>
            {item.label}
          </ListLabel>;
      }

      if (item.children) {
        return <SidebarAccordion key={index} item={item}>
            {renderLevels(item.children)}
          </SidebarAccordion>;
      }

      if (item.type === "extLink") {
        return <ExternalLink key={index} href={item.path} rel="noopener noreferrer" target="_blank">
            <NavItemButton key={item.name} name="child" active={0}>
              {item.icon ? <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper> : <span className="item-icon icon-text">{item.iconText}</span>}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {item.badge ? <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue> : null}
            </NavItemButton>
          </ExternalLink>;
      }

      return <NavItemButton key={index} className="navItem" active={activeRoute(item.path)} onClick={() => handleNavigation(item.path)}>
          {item?.icon ? <ListIconWrapper>
              <item.icon />
            </ListIconWrapper> : <BulletIcon active={activeRoute(item.path)} />}

          <StyledText compact={COMPACT}>{item.name}</StyledText>

          {item.badge ? <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue> : null}
        </NavItemButton>;
    });
  };

  return <Scrollbar autoHide clickOnTrack={false} sx={{
    overflowX: "hidden",
    maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`
  }}>
      <Box height="100%" px={2}>
        {renderLevels(navigation)}
      </Box>
    </Scrollbar>;
}