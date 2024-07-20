import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; 
// ==============================================================


// ==============================================================
export default function BottomActions({
  total,
  handleNavigate
}) {
  return <Box p={2.5}>
      <Button fullWidth color="primary" variant="contained" sx={{
      mb: "0.75rem",
      height: "40px"
    }} onClick={handleNavigate("/checkout")}>
        Checkout Now ({total})
      </Button>

      <Button fullWidth color="primary" variant="outlined" sx={{
      height: 40
    }} onClick={handleNavigate("/cart")}>
        View Cart
      </Button>
    </Box>;
}