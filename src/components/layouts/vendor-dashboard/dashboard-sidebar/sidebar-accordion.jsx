import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import styled from "@mui/material/styles/styled"; 
// LOCAL CUSTOM HOOK

import { useLayout } from "../dashboard-layout-context"; 
// STYLED COMPONENTS

import { BadgeValue, BulletIcon, StyledText, NavItemButton, ListIconWrapper, ChevronRightIcon } from "./styles"; 
// STYLED COMPONENT

const NavExpandRoot = styled("div")({
  "& .expansion-panel": {
    overflow: "hidden",
    "& .expansion-panel": {
      paddingLeft: 8
    }
  }
}); 
// ================================================================


// ================================================================
export default function SidebarAccordion({
  item,
  children
}) {
  const {
    name,
    icon,
    iconText,
    badge
  } = item || {};
  const {
    COMPACT
  } = useLayout();
  const pathname = usePathname();
  const [hasActive, setHasActive] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => setCollapsed(state => !state);

  const find = item?.children?.find(li => li.path === pathname);
  useEffect(() => {
    if (find) {
      setCollapsed(true);
      setHasActive(1);
    }

    if (COMPACT) {
      setCollapsed(false);
    }

    return () => {
      setCollapsed(false);
      setHasActive(0);
    };
  }, [find, COMPACT]);
  return <NavExpandRoot className="subMenu">
      <NavItemButton active={hasActive} onClick={handleClick} sx={{
      justifyContent: "space-between"
    }}>
        <Box display="flex" alignItems="center">
          {icon ? <ListIconWrapper>
              <item.icon />
            </ListIconWrapper> : null}

          {iconText ? <BulletIcon active={hasActive} /> : null}

          <StyledText compact={COMPACT}>{name}</StyledText>
        </Box>

        {badge ? <BadgeValue compact={COMPACT}>{badge.value}</BadgeValue> : null}

        <ChevronRightIcon color="disabled" compact={COMPACT} collapsed={collapsed ? 1 : 0} />
      </NavItemButton>

      <Collapse in={collapsed} unmountOnExit>
        <div className="expansion-panel">{children}</div>
      </Collapse>
    </NavExpandRoot>;
}