import Divider from "@mui/material/Divider"; 
// MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"; 
// GLOBAL CUSTOM COMPONENT

import { Span } from "components/Typography"; 
// STYLED COMPONENT

import { HoverWrapper } from "../styles"; 
// ==============================================================


// ==============================================================
export default function HoverActions({
  isFavorite,
  toggleView,
  toggleFavorite,
  handleIncrementQuantity
}) {
  return <HoverWrapper className="controller">
      <Span onClick={toggleView}>
        <RemoveRedEye />
      </Span>

      <Divider orientation="horizontal" flexItem />

      <Span onClick={toggleFavorite}>
        {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" color="primary" />}
      </Span>

      <Divider orientation="horizontal" flexItem />

      <Span onClick={handleIncrementQuantity}>
        <AddShoppingCart />
      </Span>
    </HoverWrapper>;
}