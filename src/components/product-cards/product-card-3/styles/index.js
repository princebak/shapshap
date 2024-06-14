import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENT

import { FlexBetween } from "components/flex-box";
export const StyledBazaarCard = styled("div")({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between"
});
export const ImageWrapper = styled("div")(({
  theme
}) => ({
  height: "100%",
  borderRadius: 8,
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block"
  },
  "&:hover": {
    "& .hoverButtonBox": {
      opacity: 1
    },
    "& .hoverImgBox": {
      filter: "blur(5px)"
    }
  }
}));
export const HoverButtonBox = styled("div")({
  opacity: 0,
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: ".5s ease",
  transform: "translate(-50%, -50%)",
  "& .buttonBox": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    "& .addCartButton": {
      bottom: 20,
      margin: "auto",
      padding: "4px 14px",
      position: "absolute",
      "& svg": {
        fontSize: 16
      }
    }
  }
});
export const ImageBox = styled("div")({
  opacity: 1,
  height: "100%",
  display: "grid",
  placeItems: "center",
  padding: "44px 40px",
  background: "#F5F5F5",
  transition: "all .3s ease"
});
export const ItemController = styled(FlexBetween)(({
  theme
}) => ({
  background: "#fff",
  overflow: "hidden",
  borderRadius: "5px",
  boxShadow: theme.shadows[2],
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "6px 12px",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9"
    }
  },
  "& svg": {
    fontSize: 22,
    color: theme.palette.grey[600]
  }
}));
export const ContentWrapper = styled("div")({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});