"use client";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
export default styled(Box)({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    inset: 0,
    zIndex: 1,
    opacity: 0,
    content: '""',
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    transition: "all 250ms ease-in-out"
  },
  "&:hover:after": {
    opacity: 0.3
  }
});