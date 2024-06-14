import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import NavLink from "components/nav-link/nav-link";
export const MainContainer = styled(Card)(({
  theme
}) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)"
  }
}));
export const StyledNavLink = styled(NavLink, {
  shouldForwardProp: prop => prop !== "isCurrentPath"
})(({
  theme,
  isCurrentPath
}) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600]
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main
    }
  }
}));