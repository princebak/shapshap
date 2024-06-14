import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
export const Card = styled("div")({
  ":hover": {
    img: {
      transform: "scale(1.1)"
    },
    ".product-actions": {
      right: 15
    },
    ".product-view-action": {
      opacity: 1
    }
  }
});
export const CardMedia = styled("div")(({
  theme
}) => ({
  aspectRatio: "1/1",
  
// maxHeight: 300,
  borderRadius: 4,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.grey[300],
  img: {
    transition: "0.3s"
  }
}));
export const AddToCartButton = styled(IconButton)(({
  theme
}) => ({
  top: 15,
  right: -40,
  position: "absolute",
  backgroundColor: "white",
  transition: "right 0.3s .1s",
  color: theme.palette.text.primary,
  ".icon": {
    fontSize: 16
  }
}));
export const FavoriteButton = styled(IconButton)(({
  theme
}) => ({
  top: 55,
  right: -40,
  position: "absolute",
  backgroundColor: "white",
  transition: "right 0.3s .2s",
  color: theme.palette.text.primary,
  ".icon": {
    fontSize: 16
  }
}));
export const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 12,
  opacity: 0,
  borderRadius: 4,
  position: "absolute",
  transition: "all 0.3s"
});