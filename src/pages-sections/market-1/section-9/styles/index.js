"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
export const StyledCard = styled(Card)(({
  theme
}) => ({
  gap: 8,
  display: "flex",
  borderRadius: 8,
  padding: "0.75rem",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3]
  },
  [theme.breakpoints.down(375)]: {
    flexDirection: "column"
  }
}));