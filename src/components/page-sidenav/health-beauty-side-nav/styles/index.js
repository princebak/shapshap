"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
export const NavbarRoot = styled(Card)(() => ({
  height: "100%",
  borderRadius: 0,
  position: "relative"
}));
export const DotListItem = styled("div")(({
  theme
}) => ({
  gap: 8,
  display: "flex",
  paddingBlock: 10,
  alignItems: "center",
  transition: "all 0.2s",
  ":hover": {
    ".dot": {
      backgroundColor: theme.palette.primary.main
    }
  }
}));
export const Circle = styled("div")(({
  theme
}) => ({
  width: 4,
  height: 4,
  borderRadius: 3,
  marginLeft: "2rem",
  backgroundColor: theme.palette.grey[600]
}));