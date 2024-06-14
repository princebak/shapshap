import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel"; 
// GLOBAL CUSTOM COMPONENT

import { Paragraph } from "components/Typography"; 
// ==============================================================


// ==============================================================
export default function FormLabel({
  name,
  checked,
  title,
  handleChange
}) {
  return <FormControlLabel name={name} onChange={handleChange} label={<Paragraph fontWeight={600}>{title}</Paragraph>} control={<Radio checked={checked} color="primary" size="small" />} />;
}