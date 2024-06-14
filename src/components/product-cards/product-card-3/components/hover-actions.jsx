import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"; 
// GLOBAL CUSTOM COMPONENT

import { Span } from "components/Typography"; 
// STYLED COMPONENTS

import { HoverButtonBox, ItemController } from "../styles"; 
// ==============================================================


// ==============================================================
export default function HoverActions(props) {
  const {
    hasQty,
    isFavorite,
    toggleDialog,
    toggleFavorite,
    handleAddToCart,
    handleRemoveFormCart
  } = props;
  return <HoverButtonBox className="hoverButtonBox">
      <div className="buttonBox">
        <ItemController>
          <Span onClick={toggleDialog}>
            <RemoveRedEye />
          </Span>

          <Divider orientation="vertical" flexItem />

          <Span onClick={toggleFavorite}>
            {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder color="primary" fontSize="small" />}
          </Span>

          <Divider orientation="vertical" flexItem />

          <Span onClick={handleAddToCart}>
            <AddShoppingCart />
          </Span>
        </ItemController>

        {hasQty ? <Button color="primary" variant="outlined" className="addCartButton" onClick={handleRemoveFormCart}>
            <Remove /> Remove from Cart
          </Button> : <Button color="primary" variant="outlined" className="addCartButton" onClick={handleAddToCart}>
            <Add /> Add to Cart
          </Button>}
      </div>
    </HoverButtonBox>;
}