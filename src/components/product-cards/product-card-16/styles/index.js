"use client";

import styled from "@mui/material/styles/styled";
export const PriceText = styled("p")(({
  theme
}) => ({
  fontSize: 17,
  lineHeight: 1,
  fontWeight: 700,
  marginTop: ".75rem",
  color: theme.palette.primary.main,
  ".base-price": {
    fontSize: 15,
    marginRight: 8,
    fontWeight: 600,
    textDecoration: "line-through",
    color: theme.palette.grey[600]
  }
}));