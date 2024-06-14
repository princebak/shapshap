
// MUI
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox"; 
// ==============================================================


// ==============================================================
export default function CheckboxLabel({
  label,
  ...props
}) {
  return <FormControlLabel label={label} control={<Checkbox size="small" color="primary" {...props} />} slotProps={{
    typography: {
      fontSize: 14,
      lineHeight: 1
    }
  }} />;
}