import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import { FlexBetween } from "components/flex-box";
export const StyledCard = styled(Box)(({
  theme
}) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": {
      display: "flex"
    },
    "& .controlBox": {
      display: "flex",
      bottom: 0
    }
  }
}));
export const ImgBox = styled("div")(({
  theme
}) => ({
  overflow: "hidden",
  position: "relative",
  padding: "0 40px 20px 40px",
  background: theme.palette.primary[100]
}));
export const ItemController = styled(FlexBetween)(({
  theme
}) => ({
  width: 35,
  right: 15,
  height: 120,
  bottom: -120,
  background: "#fff",
  overflow: "hidden",
  position: "absolute",
  flexDirection: "column",
  transition: "bottom 0.3s ease-in-out",
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "8px 10px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: theme.palette.primary.main,
      "& svg": {
        color: "#fff"
      }
    }
  },
  "& svg": {
    fontSize: 18,
    color: theme.palette.grey[600]
  }
}));
export const ContentWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});