import MenuItem from "@mui/material/MenuItem";
import TouchRipple from "@mui/material/ButtonBase";
import useTheme from "@mui/material/styles/useTheme"; 
// MUI ICON COMPONENT

import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined"; 
// GLOBAL CUSTOM COMPONENT

import BazaarMenu from "components/BazaarMenu"; 
// STYLED COMPONENT

import { DropDownHandler } from "../styles"; 
// DATA

import { categories } from "../categories"; 
// ==============================================================


// ==============================================================
export default function CategoryDropdown({
  title,
  handleChange
}) {
  const {
    breakpoints
  } = useTheme();
  return <BazaarMenu direction="left" sx={{
    zIndex: breakpoints.down("md") ? 99999 : 1502
  }} handler={e => <DropDownHandler component={TouchRipple} onClick={e}>
          {title}
          <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
        </DropDownHandler>} options={onClose => {
    return categories.map(item => <MenuItem key={item.value} onClick={() => {
      handleChange(item);
      onClose();
    }}>
            {item.title}
          </MenuItem>);
  }} />;
}