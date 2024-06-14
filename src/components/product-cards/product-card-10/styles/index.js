import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
export const Card = styled("div")(({
  theme
}) => ({
  height: "100%",
  borderRadius: "3px",
  transition: "all 0.3s",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[100]}`,
  ":hover": {
    "& .product-actions": {
      right: 5
    },
    "& img": {
      transform: "scale(1.1)"
    },
    border: `1px solid ${theme.palette.dark.main}`
  }
}));
export const CardMedia = styled("div")({
  width: "100%",
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "& img": {
    transition: "0.3s"
  }
});
export const StyledIconButton = styled(IconButton)({
  top: 10,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .1s"
});
export const FavoriteButton = styled(IconButton)({
  top: 45,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .2s"
});