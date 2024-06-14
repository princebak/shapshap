"use client";

import styled from "@mui/material/styles/styled";
export const RootStyle = styled("div")(({
  theme
}) => ({
  minHeight: 400,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  ".content": {
    left: 0,
    right: 0,
    top: "50%",
    paddingBlock: 200,
    textAlign: "center",
    position: "absolute",
    transform: "translateY(-50%)",
    ".MuiButton-root": {
      padding: ".75rem 2rem",
      borderRadius: 0
    }
  },
  ".banner": {
    objectFit: "cover"
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 330,
    ".content": {
      paddingInline: "1rem"
    }
  }
}));