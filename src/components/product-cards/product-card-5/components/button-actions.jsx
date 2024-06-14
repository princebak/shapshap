import Button from "@mui/material/Button"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; 
// STYLED COMPONENT

import { ButtonBox } from "../styles"; 
// ==============================================================


// ==============================================================
export default function ButtonActions({
  hasQty,
  handleDecrementQuantity,
  handleIncrementQuantity
}) {
  const BTN_STYLE = {
    py: "3px",
    fontSize: 13,
    width: "100%"
  };
  return <ButtonBox>
      {hasQty ? <Button variant="contained" onClick={handleDecrementQuantity} sx={BTN_STYLE}>
          <Remove /> Remove from Cart
        </Button> : <Button variant="contained" onClick={handleIncrementQuantity} sx={BTN_STYLE}>
          <Add /> Add to Cart
        </Button>}

      <Button variant="contained" sx={{
      p: "3px 8px"
    }}>
        <FavoriteBorder sx={{
        fontSize: 16
      }} />
      </Button>
    </ButtonBox>;
}