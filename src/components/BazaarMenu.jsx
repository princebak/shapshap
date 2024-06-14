import { Fragment, useState } from "react";
import Menu from "@mui/material/Menu";

// ===============================================================
export default function BazaarMenu({
  open,
  handler,
  options,
  direction = "left",
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleClick = event => setAnchorEl(event.currentTarget);

  return <Fragment>
      {handler ? handler(handleClick) : null}

      <Menu elevation={0} anchorEl={anchorEl} onClose={handleClose} open={open !== undefined ? open : !!anchorEl} anchorOrigin={{
      vertical: "bottom",
      horizontal: direction
    }} transformOrigin={{
      vertical: "top",
      horizontal: direction
    }} {...props}>
        {options(handleClose)}
      </Menu>
    </Fragment>;
}