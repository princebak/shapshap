
// MUI ICON COMPONENTS
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; 
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

      <Span onClick={toggleFavorite} borderLeft="1px solid" borderRight="1px solid" borderColor="grey.300">
        {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" color="disabled" />}
      </Span>

      <Span onClick={handleIncrementQuantity}>
        <ShoppingCart />
      </Span>
    </HoverWrapper>;
}