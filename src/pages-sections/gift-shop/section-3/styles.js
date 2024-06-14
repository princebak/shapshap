"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import ButtonBase from "@mui/material/ButtonBase";
const BOX_STYLE = {
  height: 250,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center"
};
export const LeftCard = styled(Card)(({
  theme
}) => ({ ...BOX_STYLE,
  position: "relative",
  background: theme.palette.marron[100],
  ".content": {
    zIndex: 1,
    paddingInline: 20,
    position: "absolute",
    ...(theme.direction === "rtl" ? {
      right: 20,
      textAlign: "right"
    } : {
      left: 20
    })
  },
  ".img-wrapper": {
    right: 0,
    display: "flex",
    position: "absolute",
    ...(theme.direction === "rtl" && {
      left: 0,
      right: "auto"
    })
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem"
  }
}));
export const RightCard = styled(Card)(({
  theme
}) => ({ ...BOX_STYLE,
  position: "relative",
  background: theme.palette.marron[100],
  ".content": {
    top: 25,
    zIndex: 1,
    width: "100%",
    textAlign: "center",
    position: "absolute"
  },
  ".img-wrapper": {
    zIndex: 0,
    bottom: 0,
    width: "100%",
    display: "flex",
    position: "absolute"
  }
}));
export const StyledButton = styled(ButtonBase)({
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "underline"
});