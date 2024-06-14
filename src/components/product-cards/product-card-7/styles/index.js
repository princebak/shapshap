import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
export const StyledCard = styled(Box)(({
  theme
}) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  outline: `2px solid ${theme.palette.grey[50]}`,
  ":hover": {
    boxShadow: theme.shadows[2]
  }
}));
export const ImgBox = styled("div")(({
  theme
}) => ({
  height: 230,
  marginBottom: "5rem",
  padding: "60px 40px 20px 40px",
  background: theme.palette.grey[100],
  ".img-wrapper": {
    maxWidth: 300,
    margin: "auto"
  }
}));
export const ContentWrapper = styled("div")({
  gap: 8,
  display: "flex",
  padding: "1rem",
  ".content": {
    flex: "1 1 0"
  }
});
export const StatusChipBox = styled("div")(({
  theme
}) => ({
  width: 40,
  height: 42,
  zIndex: 11,
  top: "0px",
  right: "30px",
  fontSize: "12px",
  position: "absolute",
  background: theme.palette.primary.main,
  ".triangle": {
    width: "100%",
    display: "flex"
  },
  ".triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: `20px solid ${theme.palette.primary.main}`
  },
  ".triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: `20px solid ${theme.palette.primary.main}`
  }
}));
export const StatusChip = styled(Span)({
  color: "#fff",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
export const ColorBox = styled("div")(({
  theme
}) => ({
  gap: 8,
  display: "flex",
  padding: "10px 5px",
  "& span": {
    width: 12,
    height: 12,
    borderRadius: 8,
    "&:hover": {
      cursor: "pointer",
      outline: `2px solid ${theme.palette.grey[200]}`
    }
  }
}));
export const StyledButton = styled(Button)(({
  theme
}) => ({
  padding: "4px",
  borderRadius: 0,
  transition: "all 0.3s",
  color: theme.palette.primary.main,
  ":hover": {
    color: "#fff",
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`
  }
}));