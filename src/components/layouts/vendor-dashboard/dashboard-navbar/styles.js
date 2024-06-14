import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@mui/material/styles/styled";
import InputBase from "@mui/material/InputBase";
import FlexRowCenter from "components/flex-box/flex-row-center";
export const DashboardNavbarRoot = styled(AppBar)(({
  theme
}) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary
}));
export const StyledToolBar = styled(Toolbar)({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto"
  }
});
export const ToggleWrapper = styled(FlexRowCenter)(({
  theme
}) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  display: "none",
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("lg")]: {
    display: "flex"
  }
}));
export const CustomButton = styled(Button)(({
  theme
}) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("xs")]: {
    display: "none"
  }
}));
export const StyledInputBase = styled(InputBase)(({
  theme
}) => ({
  width: 200,
  padding: "5px 10px",
  borderRadius: "8px",
  color: theme.palette.grey[500],
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));