"use client";

import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 300ms ease-in-out",
  ":hover": {
    boxShadow: theme.shadows[2]
  }
}));
export const PriceText = styled("p")(({
  theme
}) => ({
  gap: 8,
  fontSize: 17,
  lineHeight: 1,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.main,
  ".base-price": {
    fontSize: 15,
    fontWeight: 500,
    textDecoration: "line-through",
    color: theme.palette.grey[600]
  }
}));
export const Content = styled("div")(({
  theme
}) => ({
  padding: 18,
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
  ".button-group": {
    color: "white",
    display: "flex",
    overflow: "hidden",
    borderRadius: "6px",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    ".base-button": {
      padding: "8px 16px",
      backgroundColor: theme.palette.primary[800]
    }
  },
  ".button-small": {
    maxWidth: 170,
    margin: "auto"
  },
  ".MuiButton-containedPrimary": {
    color: "white"
  }
}));