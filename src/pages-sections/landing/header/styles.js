import { styled, keyframes } from "@mui/material/styles";
const headerHeight = 72;
const slideFromTop = keyframes`
from { top: -${headerHeight}px; }
to { top: 0; }`; 
// STYLED COMPONENT

export const HeaderWrapper = styled("div")(({
  theme
}) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  "& .link": {
    cursor: "pointer",
    transition: "color 250ms ease-in-out",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  "& .fixedHeader": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    background: "white",
    height: headerHeight,
    boxShadow: theme.shadows[2],
    animation: `${slideFromTop} 250ms ease-in-out`,
    "& .link": {
      color: "inherit"
    }
  },
  [theme.breakpoints.down("sm")]: {
    "& .right-links": {
      display: "none"
    },
    "& .purchase-link": {
      display: "none"
    }
  }
}));