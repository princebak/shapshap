"use client";

import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENT

export const ContentWrapper = styled("div")(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
    width: "100%"
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "0 3rem",
    paddingBottom: "2rem",
    width: "80%"
  }
}));
export const FavoriteButton = styled(Button)(({
  theme
}) => ({
  color: "white",
  height: "44px",
  borderRadius: "8px",
  paddingInline: "1rem",
  backgroundColor: theme.palette.grey[500],
  ":hover": {
    backgroundColor: theme.palette.grey[500]
  }
}));