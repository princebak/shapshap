import "simplebar-react/dist/simplebar.min.css"; 
// STYLED COMPONENT

import { StyledScrollBar } from "./styles"; 
// =============================================================


// =============================================================
export default function Scrollbar({
  children,
  autoHide = true,
  sx,
  ...props
}) {
  return <StyledScrollBar sx={sx} autoHide={autoHide} {...props}>
      {children}
    </StyledScrollBar>;
}