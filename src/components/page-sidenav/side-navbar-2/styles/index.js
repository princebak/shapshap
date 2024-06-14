import ButtonBase from "@mui/material/ButtonBase";
import styled from "@mui/material/styles/styled"; 
// MUI ICON COMPONENTS

import ChevronRight from "@mui/icons-material/ChevronRight"; 
// ===============================================================


// ===============================================================
export const NavExpandRoot = styled("div")(({
  theme
}) => ({
  "& .expansion-panel": {
    overflow: "hidden",
    position: "relative",
    paddingLeft: "1.5rem",
    ":before": {
      left: 8,
      content: "''",
      height: "100%",
      position: "absolute",
      borderLeft: `1px solid ${theme.palette.grey[400]}`
    }
  }
}));
export const NavItemButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== "active"
})(({
  theme,
  active
}) => ({
  height: 44,
  width: "100%",
  whiteSpace: "nowrap",
  justifyContent: "flex-start",
  transition: "all 0.15s ease",
  ...(active && {
    color: theme.palette.primary.dark,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.dark
    }
  }),
  ":hover": {
    color: theme.palette.primary.dark,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.dark
    }
  }
}));
export const ChevronRightIcon = styled(ChevronRight, {
  shouldForwardProp: prop => prop !== "collapsed"
})(({
  collapsed,
  theme: {
    direction
  }
}) => ({
  fontSize: 18,
  transform: collapsed ? "0deg" : "rotate(90deg)",
  transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
  ...(collapsed && direction === "rtl" && {
    transform: "rotate(180deg)"
  })
}));
export const ListIconWrapper = styled("div")(({
  theme
}) => ({
  width: 22,
  height: 22,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginRight: "0.8rem",
  justifyContent: "center",
  "& svg": {
    width: "100%",
    height: "100%",
    color: theme.palette.grey[500]
  }
}));