"use client";

import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem"
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32
    }
  },
  [theme.breakpoints.down("xs")]: {
    ".title": {
      fontSize: 16
    },
    ".title + *": {
      fontSize: 13
    },
    ".button-link": {
      height: 36,
      padding: "0 1.5rem",
      fontSize: 13
    }
  }
}));