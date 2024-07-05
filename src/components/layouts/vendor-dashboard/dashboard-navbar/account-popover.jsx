"use client";

import { useState } from "react";
// MUI

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
// GLOBAL CUSTOM COMPONENTS

import { H6, Small } from "components/Typography";
import { signOut, useSession } from "next-auth/react";
import PersonOutline from "@mui/icons-material/PersonOutline";
import { useRouter } from "next/navigation";
import { userType } from "utils/constants";
import { logout } from "redux/slices/userSlice";
import { useSelector } from "react-redux";
// STYLED COMPONENT

const Divider = styled("div")(({ theme }) => ({
  margin: "0.5rem 0",
  border: `1px dashed ${theme.palette.grey[200]}`,
}));
export default function AccountPopover() {
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const router = useRouter();

  const goto = (path) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    signOut();
  };

  return (
    <div>
      <IconButton
        sx={{
          padding: 0,
        }}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "account-menu" : undefined}
      >
        <PersonOutline sx={"grey.600"} />
        {/* <Avatar alt="Remy Sharp" src="/assets/images/avatars/001-man.svg" />*/}
      </IconButton>

      <Menu
        open={open}
        id="account-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1,
              boxShadow: 2,
              minWidth: 200,
              borderRadius: "8px",
              overflow: "visible",
              border: "1px solid",
              borderColor: "grey.200",
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "grey.200",
              },
              "&:before": {
                top: 0,
                right: 14,
                zIndex: 0,
                width: 10,
                height: 10,
                content: '""',
                display: "block",
                position: "absolute",
                borderTop: "1px solid",
                borderLeft: "1px solid",
                borderColor: "grey.200",
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          },
        }}
      >
        {currentUser ? (
          <div>
            <Box px={2} pt={1}>
              <H6>{currentUser?.name || "username"}</H6>
              <Small color="grey.500">
                {currentUser?.type || "Account type"}
              </Small>
            </Box>

            {currentUser?.type === userType.ADMIN && (
              <>
                <Divider />
                <MenuItem
                  key={"/admin/sellers"}
                  onClick={() => goto("/admin/sellers")}
                >
                  Sellers
                </MenuItem>
                <MenuItem
                  key={"/admin/drivers"}
                  onClick={() => goto("/admin/drivers")}
                >
                  Drivers
                </MenuItem>
              </>
            )}

            {currentUser?.type === userType.MERCHANT && (
              <>
                <Divider />
                <MenuItem
                  key={"/vendor/orders"}
                  onClick={() => goto("/vendor/orders")}
                >
                  Orders
                </MenuItem>
                <MenuItem
                  key={"/vendor/products"}
                  onClick={() => goto("/vendor/products")}
                >
                  Products
                </MenuItem>
                <MenuItem
                  key={"/vendor/account-settings"}
                  onClick={() => goto("/vendor/account-settings")}
                >
                  Account Settings
                </MenuItem>
              </>
            )}

            {currentUser?.type === userType.BUYER && (
              <>
                <Divider />
                <MenuItem onClick={() => goto("/customer/orders")}>
                  Orders
                </MenuItem>
                <MenuItem onClick={() => goto("/customer/wish-list")}>
                  Wish list
                </MenuItem>
                <MenuItem onClick={() => goto("/customer/profile")}>
                  Profile
                </MenuItem>
              </>
            )}

            <Divider />
            <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem key={"login"} onClick={() => goto("/login")}>
              Login
            </MenuItem>
            <MenuItem key={"register"} onClick={() => goto("/register")}>
              Sign up
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
