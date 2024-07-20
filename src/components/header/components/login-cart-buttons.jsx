import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT

import PersonOutline from "@mui/icons-material/PersonOutline";
// CUSTOM ICON COMPONENT

import ShoppingBagOutlined from "icons/ShoppingBagOutlined";
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart";
import { useSelector } from "react-redux";
// ==============================================================

// ==============================================================
export default function LoginCartButtons({ toggleDialog, toggleSidenav }) {
  //const { state } = useCart();
  const { currentCart } = useSelector((state) => state.cart);
  const ICON_COLOR = {
    color: "grey.600",
  };
  return (
    <div>
      {/*  <IconButton onClick={toggleDialog}>
        <PersonOutline sx={ICON_COLOR} />
      </IconButton> */}

      <Badge badgeContent={currentCart.length} color="primary">
        <IconButton onClick={toggleSidenav}>
          <ShoppingBagOutlined sx={ICON_COLOR} />
        </IconButton>
      </Badge>
    </div>
  );
}
