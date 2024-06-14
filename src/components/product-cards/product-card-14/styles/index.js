"use client";

import styled from "@mui/material/styles/styled";
export const PriceText = styled("p")(({
  theme
}) => ({
  gap: 8,
  fontSize: 17,
  fontWeight: 700,
  marginBottom: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  ".base-price": {
    fontSize: 15,
    
// marginLeft: 8,
    fontWeight: 600,
    textDecoration: "line-through",
    color: theme.palette.grey[600]
  }
}));
export const Content = styled("div")(({
  theme
}) => ({
  textAlign: "center",
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