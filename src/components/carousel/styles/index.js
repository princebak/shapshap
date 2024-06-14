"use client";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
export const COMMON_DOT_STYLES = {
  left: 0,
  right: 0,
  bottom: 25,
  position: "absolute"
};
export const RootStyle = styled("div", {
  shouldForwardProp: prop => prop !== "space"
})(({
  space
}) => ({
  ".slick-list": {
    marginInline: -space
  },
  ".slick-slide": {
    paddingInline: space
  },
  ":hover": {
    ".slick-arrow": {
      opacity: 1,
      "&.next": {
        right: 5
      },
      "&.prev": {
        left: 5
      }
    }
  }
}));
export const DotList = styled(Box)(({
  theme
}) => ({
  gap: 6,
  zIndex: 1,
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  "& li": {
    width: 15,
    height: 15,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    "&.slick-active span::after": {
      scale: "1"
    }
  }
}));
export const Dot = styled("span", {
  shouldForwardProp: prop => prop !== "dotColor"
})(({
  dotColor,
  theme
}) => ({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  borderRadius: "50%",
  position: "relative",
  border: `1px solid ${dotColor || theme.palette.secondary.main}`,
  "&:after": {
    scale: 0,
    inset: 0,
    width: 9,
    height: 9,
    content: '""',
    margin: "auto",
    borderRadius: "50%",
    position: "absolute",
    transition: "scale 500ms ease-in-out",
    backgroundColor: dotColor || theme.palette.secondary.main
  }
}));
export const ArrowButton = styled(Box)(({
  theme
}) => ({
  zIndex: 1,
  width: 35,
  height: 35,
  padding: 0,
  opacity: 0,
  top: "50%",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(0, -50%)",
  transition: "all 0.2s ease-in-out",
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  ...(theme.direction === "rtl" && {
    ".back-icon, .forward-icon": {
      rotate: "180deg"
    }
  }),
  "&.slick-disabled": {
    visibility: "hidden"
  }
}));