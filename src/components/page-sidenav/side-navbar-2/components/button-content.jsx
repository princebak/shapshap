import Box from "@mui/material/Box";

// STYLED COMPONENT
import { ListIconWrapper } from "../styles"; 
// CUSTOM ICON COMPONENTS

import Icons from "icons/grocery-4"; 
// ==============================================================


// ==============================================================
export default function ButtonContent({
  icon,
  name
}) {
  const Icon = icon ? Icons[icon] : null;
  return <Box display="flex" alignItems="center">
      {icon ? <ListIconWrapper>
          <Icon />
        </ListIconWrapper> : <Box marginRight="0.6rem" />}

      {name}
    </Box>;
}