"use client";

import Link from "next/link";
import styled from "@mui/material/styles/styled"; 
// ==============================================================


// ==============================================================
export const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== "isDark"
})(({
  theme,
  isDark
}) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  ...(!isDark && {
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.grey[100]
    }
  })
}));
export const StyledFooter = styled("footer")(({
  theme
}) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem"
  }
}));
export const StyledRoot = styled("footer")(({
  theme
}) => ({
  padding: 40,
  color: "white",
  borderRadius: 8,
  background: theme.palette.primary[600],
  [theme.breakpoints.down("md")]: {
    marginBottom: "6rem !important"
  }
}));
export const Heading = styled("h6")({
  fontSize: 18,
  lineHeight: 1,
  fontWeight: 600,
  marginBottom: 12
});