"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
export const CardRoot = styled(Card)(({
  theme
}) => ({
  borderRadius: 16,
  position: "relative",
  border: `1px solid ${theme.palette.grey[300]}`
}));
export const PriceText = styled("p")(({
  theme
}) => ({
  fontWeight: 600,
  color: theme.palette.grey[600],
  textDecoration: "line-through"
}));