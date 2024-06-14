"use client";

import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  paddingBlock: 8,
  ".links": {
    gap: 16,
    paddingTop: 16,
    display: "flex",
    paddingBottom: 8,
    "a:hover": {
      color: theme.palette.primary.main,
      transition: "all 300ms ease-in-out"
    }
  }
}));