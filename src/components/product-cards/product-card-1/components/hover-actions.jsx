import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; 
// STYLED COMPONENTS

import { HoverIconWrapper } from "../styles"; 
// ==============================================================


// ==============================================================
export default function HoverActions({
  isFavorite,
  toggleFavorite,
  toggleView
}) {
  return <HoverIconWrapper className="hover-box">
      <IconButton onClick={toggleView}>
        <RemoveRedEye color="disabled" fontSize="small" />
      </IconButton>

      <IconButton onClick={toggleFavorite}>
        {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" color="disabled" />}
      </IconButton>
    </HoverIconWrapper>;
}