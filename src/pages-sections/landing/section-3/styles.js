import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import { Span } from "components/Typography"; 
// STYLED COMPONENTS

export const FilterButton = styled(Button, {
  shouldForwardProp: prop => prop !== "selected"
})(({
  theme,
  selected
}) => ({
  color: selected ? theme.palette.primary.main : "inherit",
  ":hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main
  }
}));
export const TitleBadge = styled(Span)(({
  theme
}) => ({
  color: theme.palette.grey[500],
  margin: "0 4px"
}));