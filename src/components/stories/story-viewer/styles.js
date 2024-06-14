"use client";

import styled from "@mui/material/styles/styled";
export const ModalWrapper = styled("div")(() => ({
  top: "50%",
  outline: 0,
  left: "50%",
  borderRadius: 4,
  overflow: "hidden",
  aspectRatio: "9/16",
  position: "absolute",
  backgroundColor: "white",
  transform: "translate(-50%, -50%)"
}));