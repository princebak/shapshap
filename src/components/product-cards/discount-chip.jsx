"use client";

import Chip from "@mui/material/Chip";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENT

const StyledChip = styled(Chip, {
  shouldForwardProp: prop => prop !== "shape"
})(({
  theme,
  shape
}) => ({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  ...(shape === "square" && {
    borderRadius: 0
  })
})); 
// ==============================================================


// ==============================================================
export default function DiscountChip({
  discount = 0,
  shape = "rounded",
  ...props
}) {
  return discount > 0 ? <StyledChip size="small" shape={shape} label={`${discount}% off`} {...props} /> : null;
}