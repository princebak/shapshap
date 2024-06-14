"use client";

import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENTS

export const Wrapper = styled("div")(({
  theme
}) => ({
  height: "100%",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  img: {
    height: "100%",
    objectFit: "cover",
    transition: "all 0.3s",
    objectPosition: "center center"
  },
  ":hover": {
    img: {
      transform: "scale(1.1)"
    },
    ".category-title": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.dark.main
    }
  }
}));
export const CategoryTitle = styled("div")({
  left: 10,
  right: 10,
  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: "rgba(255,255,255, .67)"
});