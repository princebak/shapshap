import Button from "@mui/material/Button"; 
// MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; 
// ==============================================================


// ==============================================================
export default function FavoriteButton({
  isFavorite,
  handleClick
}) {
  const STYLES = {
    height: 0,
    alignItems: "flex-start",
    "&:hover": {
      backgroundColor: "transparent"
    }
  };
  return <Button disableRipple disableElevation onClick={handleClick} sx={STYLES}>
      {isFavorite ? <Favorite fontSize="small" color="primary" /> : <FavoriteBorder fontSize="small" sx={{
      opacity: 0.5
    }} />}
    </Button>;
}