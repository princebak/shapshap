import MenuItem from "@mui/material/MenuItem";
// MUI ICON COMPONENTS

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// GLOBAL CUSTOM COMPONENTS

import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
// LOCAL CUSTOM COMPONENTS

import MegaMenu from "../mega-menu";
import NavItemChild from "./nav-item-child";
import CategoryBasedMenu from "../category-based-menu";
// NAVIGATION DATA LIST

import navigation from "data/navbarNavigation";
// STYLED COMPONENTS

import { StyledNavLink, NAV_LINK_STYLES, ChildNavListWrapper } from "../styles";
// DATA TYPES

export default function NavigationList() {
  const renderNestedNav = (list = [], isRoot = false) => {

    return list.map((nav) => {
      if (isRoot) {
        // SHOW MEGA MENU
        if (nav.megaMenu) {
          return (
            <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
          );
        }
        // SHOW MEGA MENU WITH SUB ITEMS

        if (nav.megaMenuWithSub) {
          return (
            <CategoryBasedMenu
              key={nav.title}
              title={nav.title}
              menuList={nav.child}
            />
          );
        }

        if (nav.url) {
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems="center"
              position="relative"
              flexDirection="column"
              sx={{
                "&:hover": {
                  "& > .child-nav-item": {
                    display: "block",
                  },
                },
              }}
            >
              <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
                {nav.title}{" "}
                <KeyboardArrowDown
                  sx={{
                    color: "grey.500",
                    fontSize: "1.1rem",
                  }}
                />
              </FlexBox>

              <ChildNavListWrapper className="child-nav-item">
                <BazaarCard
                  elevation={3}
                  sx={{
                    mt: 2.5,
                    py: 1,
                    minWidth: 100,
                  }}
                >
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ChildNavListWrapper>
            </FlexBox>
          );
        }
      } else {
        if (nav.url) {
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        }

        if (nav.child) {
          return (
            <NavItemChild nav={nav} key={nav.title}>
              {renderNestedNav(nav.child)}
            </NavItemChild>
          );
        }
      }
    });
  };

  return <FlexBox gap={4}>{renderNestedNav(navigation, true)}</FlexBox>;
}
