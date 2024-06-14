"use client";

import styled from "@mui/material/styles/styled";
import { layoutConstant } from "utils/constants";
export const ContentWrapper = styled("div")(({
  theme
}) => ({
  display: "flex",
  position: "relative",
  ".sidebar": {
    width: "100%",
    height: "100%",
    position: "sticky",
    top: layoutConstant.headerHeight + 15,
    maxWidth: layoutConstant.grocerySidenavWidth,
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  ".content": {
    width: "100%",
    paddingLeft: "2rem",
    maxWidth: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      paddingLeft: 0
    }
  }
}));