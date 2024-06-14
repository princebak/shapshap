import ButtonBase from "@mui/material/ButtonBase";
import { alpha, styled } from "@mui/material/styles"; 
// MUI ICON COMPONENTS

import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph, Span } from "components/Typography"; 
// ===============================================================


// ===============================================================
const SidebarWrapper = styled("div", {
  shouldForwardProp: prop => prop !== "compact"
})(({
  theme,
  compact
}) => ({
  width: 280,
  height: "100vh",
  position: "fixed",
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
  ...(compact && {
    width: 86,
    "&:hover": {
      width: 280
    }
  })
}));
const NavItemButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== "active"
})(({
  theme,
  active
}) => ({
  height: 44,
  width: "100%",
  borderRadius: 8,
  marginBottom: 4,
  padding: "0 12px 0 16px",
  justifyContent: "flex-start",
  transition: "all 0.15s ease",
  ...(active && {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.grey[800], 0.6),
    "& .MuiSvgIcon-root .secondary": {
      color: theme.palette.info.main,
      opacity: 1
    }
  })
}));
const ListLabel = styled(Paragraph, {
  shouldForwardProp: prop => prop !== "compact"
})(({
  compact
}) => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "20px",
  marginLeft: "15px",
  marginBottom: "10px",
  textTransform: "uppercase",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0
  })
}));
const ListIconWrapper = styled("div")(({
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
    color: theme.palette.text.disabled
  }
}));
const ExternalLink = styled("a")({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none"
});
const StyledText = styled(Span, {
  shouldForwardProp: prop => prop !== "compact"
})(({
  compact
}) => ({
  whiteSpace: "nowrap",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0
  })
}));
const BulletIcon = styled("div", {
  shouldForwardProp: prop => prop !== "active"
})(({
  theme,
  active
}) => ({
  width: 3,
  height: 3,
  marginLeft: "10px",
  overflow: "hidden",
  borderRadius: "50%",
  marginRight: "1.3rem",
  background: active ? theme.palette.info.main : theme.palette.common.white,
  boxShadow: active ? `0px 0px 0px 4px ${alpha(theme.palette.info[500], 0.2)}` : "none"
}));
const BadgeValue = styled("div", {
  shouldForwardProp: prop => prop !== "compact"
})(({
  compact
}) => ({
  padding: "1px 8px",
  overflow: "hidden",
  borderRadius: "300px",
  display: compact ? "none" : "unset"
}));
const ChevronLeftIcon = styled(ChevronLeft, {
  shouldForwardProp: prop => prop !== "compact" && prop !== "sidebar_compact"
})(({
  compact,
  sidebar_compact
}) => ({
  width: 40,
  height: 40,
  padding: 8,
  cursor: "pointer",
  borderRadius: "50%",
  transition: "all 0.3s",
  color: "rgba(255, 255, 255, .6)",
  display: compact ? "none" : "block",
  transform: sidebar_compact ? "rotate(180deg)" : "rotate(0deg)",
  "&:hover": {
    color: "rgba(255, 255, 255, 1)",
    background: "rgba(255, 255, 255, .05)"
  }
}));
const ChevronRightIcon = styled(ChevronRight, {
  shouldForwardProp: prop => prop !== "compact" && prop !== "collapsed"
})(({
  collapsed,
  compact,
  theme: {
    direction
  }
}) => ({
  fontSize: 18,
  color: "white",
  transform: collapsed ? "0deg" : "rotate(90deg)",
  transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
  ...(compact && {
    display: "none",
    width: 0
  }),
  ...(collapsed && direction === "rtl" && {
    transform: "rotate(180deg)"
  })
}));
export { ListLabel, StyledText, BulletIcon, BadgeValue, ExternalLink, NavItemButton, SidebarWrapper, ListIconWrapper, ChevronLeftIcon, ChevronRightIcon };