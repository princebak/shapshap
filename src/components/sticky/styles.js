import { keyframes, styled } from "@mui/material/styles"; 
// ==============================================================


// ==============================================================
const slideDown = keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`;
export const StyledBox = styled("div", {
  shouldForwardProp: prop => prop !== "componentHeight" && prop !== "fixed" && prop !== "fixedOn"
})(({
  theme,
  componentHeight,
  fixedOn,
  fixed
}) => ({
  paddingTop: fixed ? componentHeight : 0,
  "& .hold": {
    zIndex: 5,
    boxShadow: "none",
    position: "relative"
  },
  "& .fixed": {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: "fixed",
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[2],
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`
  }
}));