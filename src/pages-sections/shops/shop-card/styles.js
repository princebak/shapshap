"use client";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles"; 
// STYLED COMPONENT

export const ContentWrapper = styled("div", {
  shouldForwardProp: prop => prop !== "img"
})(({
  theme,
  img
}) => ({
  color: "white",
  backgroundSize: "cover",
  padding: "17px 30px 56px",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(to bottom,
    ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(theme.palette.grey[900], 0.8)}), 
    url(${img})`
}));
export const StyledAvatar = styled(Avatar)(({
  theme
}) => ({
  width: 64,
  height: 64,
  marginTop: "-32px",
  border: `3px solid ${theme.palette.grey[100]}`
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  marginBlock: 4,
  ".icon": {
    fontSize: 19,
    transform: theme.direction === "rtl" ? "180deg" : "0deg"
  }
}));