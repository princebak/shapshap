"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
export const CardRoot = styled(Card)(({
  theme
}) => ({
  borderRadius: 16,
  position: "relative",
  border: `1px solid ${theme.palette.grey[300]}`,
  ".content": {
    padding: "1rem",
    textAlign: "center"
  }
}));
export const PriceText = styled("p")(({
  theme
}) => ({
  fontSize: 16,
  fontWeight: 700,
  color: theme.palette.primary.main,
  span: {
    fontSize: 14,
    marginLeft: 6,
    fontWeight: 600,
    textDecoration: "line-through",
    color: theme.palette.grey[600]
  }
}));