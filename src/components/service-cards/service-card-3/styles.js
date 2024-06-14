"use client";

import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENTS

export const StyledRoot = styled("div")(({
  theme
}) => ({
  gap: 16,
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  ":last-child": {
    borderRight: 0
  },
  [theme.breakpoints.down("md")]: {
    ":nth-of-type(even)": {
      borderRight: 0
    }
  },
  [theme.breakpoints.down("sm")]: {
    borderRight: 0,
    justifyContent: "flex-start"
  }
}));