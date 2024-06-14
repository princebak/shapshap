import styled from "@mui/material/styles/styled"; 
// LOCAL CUSTOM HOOK

import { useLayout } from "./dashboard-layout-context"; 
// STYLED COMPONENTS

const RootStyle = styled("div", {
  shouldForwardProp: prop => prop !== "compact"
})(({
  theme,
  compact
}) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? 86 : 280,
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0
  }
}));
export default function BodyWrapper({
  children
}) {
  const {
    sidebarCompact
  } = useLayout();
  return <RootStyle compact={sidebarCompact}>{children}</RootStyle>;
}