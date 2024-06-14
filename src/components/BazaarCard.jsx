"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled"; 
// ===============================================


// ===============================================
const BazaarCard = styled(Card, {
  shouldForwardProp: prop => prop !== "hoverEffect"
})(({
  theme,
  hoverEffect
}) => ({
  overflow: "unset",
  borderRadius: "8px",
  transition: "all 250ms ease-in-out",
  "&:hover": { ...(hoverEffect && {
      boxShadow: theme.shadows[3]
    })
  }
}));
export default BazaarCard;