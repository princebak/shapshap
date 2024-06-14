import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { FlexBetween } from "components/flex-box";
export const StyledBazaarCard = styled(BazaarCard)(({
  theme
}) => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .controller": {
      display: "flex",
      bottom: 20
    }
  }
}));
export const HoverWrapper = styled(FlexBetween)(({
  theme
}) => ({
  left: 0,
  right: 0,
  width: 120,
  height: 25,
  bottom: -40,
  margin: "auto",
  overflow: "hidden",
  background: "#fff",
  borderRadius: "5px",
  position: "absolute",
  boxShadow: theme.shadows[2],
  transition: "bottom 0.3s ease-in-out",
  "& span, & a": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9"
    }
  },
  "& span": {
    padding: "0px 10px"
  },
  "& svg": {
    fontSize: 18,
    color: theme.palette.grey[600]
  }
}));
export const ImageWrapper = styled("div")(({
  theme
}) => ({
  minHeight: 288,
  display: "grid",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  padding: "44px 40px",
  placeItems: "center",
  backgroundColor: theme.palette.grey[100]
}));
export const ContentWrapper = styled("div")({
  gap: 8,
  display: "flex",
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});