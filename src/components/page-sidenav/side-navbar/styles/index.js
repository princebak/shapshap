"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
export const NavbarRoot = styled(Card, {
  shouldForwardProp: prop => prop !== "fixed" && prop !== "sidebar"
})(({
  theme,
  sidebar
}) => ({
  height: "100%",
  borderRadius: 8,
  position: "relative",
  "& .linkList": {
    cursor: "pointer",
    padding: "8px 20px",
    transition: "all 0.2s",
    color: theme.palette.grey[700],
    ":hover": {
      color: theme.palette.primary.main
    }
  },
  ...(sidebar === "colored" && {
    paddingBottom: 10,
    backgroundColor: theme.palette.primary[50]
  })
}));
export const StyledList = styled("div")(({
  theme
}) => ({
  display: "flex",
  cursor: "pointer",
  padding: "4px 20px",
  alignItems: "center",
  transition: "all 0.2s",
  color: theme.palette.grey[700],
  ":hover": {
    color: theme.palette.primary.main,
    ".dot": {
      backgroundColor: theme.palette.primary.main
    }
  }
}));
export const Circle = styled("span")(({
  theme
}) => ({
  width: 4,
  height: 4,
  marginLeft: "2rem",
  marginRight: "8px",
  borderRadius: "3px",
  backgroundColor: theme.palette.grey[600]
}));
export const BorderBox = styled(FlexBetween, {
  shouldForwardProp: prop => prop !== "line"
})(({
  theme,
  line
}) => ({
  marginTop: 5,
  marginBottom: 15,
  "& span": {
    width: "100%"
  },
  ...(line === "dash" && {
    borderBottom: "2px",
    borderStyle: "none none dashed none",
    borderColor: theme.palette.primary.main,
    "& span": {
      display: "none"
    }
  })
}));
export const ColorBorder = styled(Span, {
  shouldForwardProp: prop => prop !== "grey"
})(({
  grey,
  theme
}) => ({
  borderRadius: "2px 0 0 2px",
  height: grey ? "2px" : "3px",
  background: grey ? theme.palette.grey[400] : theme.palette.primary[200]
}));