"use client";

import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery"; 
// CUSTOM ICON COMPONENTS

import Home from "icons/Home";
import User2 from "icons/User2";
import CategoryOutlined from "icons/CategoryOutline";
import ShoppingBagOutlined from "icons/ShoppingBagOutlined"; 
// GLOBAL CUSTOM HOOKS

import useCart from "hooks/useCart"; 
// STYLED COMPONENTS

import { iconStyle, StyledBox, StyledDrawer, StyledNavLink, Wrapper } from "./styles";
/**
 * Difference between MobileNavigationBar and MobileNavigationBar2
 * 1. In the MobileNavigationBar we don't use conditionally render
 * 2. In the list array if doesn't exists href property then open category menus sidebar drawer in MobileNavigationBar2
 */

export default function MobileNavigationBar2({
  children
}) {
  const {
    state
  } = useCart();
  const [open, setOpen] = useState(false);
  const DOWN_900 = useMediaQuery(theme => theme.breakpoints.down(900));

  const handleDrawerClose = () => setOpen(false);

  const handleDrawerToggle = () => setOpen(state => !state);

  if (DOWN_900) {
    return <Box position="relative" display="flex" flexDirection="column">
        <StyledDrawer open={open} anchor="left" onClose={handleDrawerClose}>
          {children}
        </StyledDrawer>

        <Wrapper>
          {list.map(({
          Icon,
          title,
          href
        }) => {
          
// LINK INNER CONTENTS
          const ICON = <Icon sx={iconStyle} fontSize="small" />;
          const CONTENT = <Fragment>
                {title === "Cart" ? <Badge badgeContent={state.cart.length} color="primary">
                    {ICON}
                  </Badge> : ICON}

                {title}
              </Fragment>;
          return href ? <StyledNavLink key={title} href={href}>
                {CONTENT}
              </StyledNavLink> : <StyledBox key={title} onClick={handleDrawerToggle}>
                {CONTENT}
              </StyledBox>;
        })}
        </Wrapper>
      </Box>;
  }

  return null;
}
const list = [{
  title: "Home",
  Icon: Home,
  href: "/"
}, {
  title: "Category",
  Icon: CategoryOutlined
}, {
  title: "Cart",
  Icon: ShoppingBagOutlined,
  href: "/cart"
}, {
  title: "Account",
  Icon: User2,
  href: "/profile"
}];