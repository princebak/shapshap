import Link from "next/link";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENT

import Clear from "@mui/icons-material/Clear"; 
// CUSTOM ICON COMPONENTS

import Icon from "icons"; 
// LOCAL CUSTOM COMPONENTS

import DialogDrawer from "./dialog-drawer"; 
// GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { Paragraph } from "components/Typography";
import { SearchInput } from "components/search-box";
import { MobileMenu } from "components/navbar/mobile-menu";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; 
// LOCAL CUSTOM HOOK

import useHeader from "../hooks/use-header";
export default function MobileHeader() {
  const {
    state
  } = useCart();
  const {
    dialogOpen,
    sidenavOpen,
    searchBarOpen,
    toggleDialog,
    toggleSearchBar,
    toggleSidenav
  } = useHeader();
  const ICON_STYLE = {
    color: "grey.600",
    fontSize: 20
  };
  return <Fragment>
      <FlexBetween width="100%">
        {
        /* LEFT CONTENT - NAVIGATION ICON BUTTON */
      }
        <Box flex={1}>
          <MobileMenu />
        </Box>

        {
        /* MIDDLE CONTENT - LOGO */
      }
        <Link href="/">
          <Image height={44} src="/assets/images/bazaar-black-sm.svg" alt="logo" />
        </Link>

        {
        /* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */
      }
        <FlexBox justifyContent="end" flex={1}>
          <IconButton onClick={toggleSearchBar}>
            <Icon.Search sx={ICON_STYLE} />
          </IconButton>

          <IconButton onClick={toggleDialog}>
            <Icon.User sx={ICON_STYLE} />
          </IconButton>

          <Badge badgeContent={state.cart.length} color="primary">
            <IconButton onClick={toggleSidenav}>
              <Icon.CartBag sx={ICON_STYLE} />
            </IconButton>
          </Badge>
        </FlexBox>
      </FlexBetween>

      {
      /* SEARCH FORM DRAWER */
    }
      <Drawer open={searchBarOpen} anchor="top" onClose={toggleSearchBar} sx={{
      zIndex: 9999
    }}>
        <Box width="auto" padding={2} height="100vh">
          <FlexBetween mb={1}>
            <Paragraph>Search to Bazaar</Paragraph>

            <IconButton onClick={toggleSearchBar}>
              <Clear />
            </IconButton>
          </FlexBetween>

          {
          /* CATEGORY BASED SEARCH FORM */
        }
          <SearchInput />
        </Box>
      </Drawer>

      {
      /* LOGIN FORM DIALOG AND CART SIDE BAR  */
    }
      <DialogDrawer dialogOpen={dialogOpen} sidenavOpen={sidenavOpen} toggleDialog={toggleDialog} toggleSidenav={toggleSidenav} />
    </Fragment>;
}