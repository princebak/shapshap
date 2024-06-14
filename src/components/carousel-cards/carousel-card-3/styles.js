"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENTS

export const RootStyled = styled(Card)(({
  theme
}) => ({
  height: "100%",
  overflow: "unset",
  borderRadius: "2px",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out"
}));
export const ContentWrapper = styled("div")({
  display: "flex",
  padding: "1rem",
  paddingTop: "3rem",
  alignItems: "center",
  flexDirection: "column"
});
export const LinkText = styled("small")(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 900,
  lineHeight: 1.6,
  borderBottom: `2px solid ${theme.palette.primary.main}`
}));