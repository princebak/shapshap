import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENT

export const StyledRoot = styled(Card)(({
  theme
}) => ({
  marginLeft: "1rem",
  paddingBlock: "0.5rem",
  "& .title-link, & .child-link": {
    color: "inherit",
    fontWeight: 600,
    display: "block",
    padding: "0.5rem 0px"
  },
  "& .child-link": {
    fontWeight: 400
  },
  "& .mega-menu-content": {
    borderRadius: 4,
    marginLeft: "1rem",
    padding: "0.5rem 0px",
    boxShadow: theme.shadows[3],
    transition: "all 250ms ease-in-out",
    backgroundColor: theme.palette.background.paper
  }
}));