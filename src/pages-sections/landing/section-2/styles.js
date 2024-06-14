import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENTS

export const StyledContent = styled("div")(({
  theme
}) => ({
  position: "relative",
  zIndex: 1,
  "&:after": {
    content: '" "',
    position: "absolute",
    height: "100px",
    width: "200px",
    top: 0,
    right: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "300px 300px 0 0",
    marginRight: -100
  },
  "&:before": {
    content: '" "',
    position: "absolute",
    height: "100px",
    width: "200px",
    bottom: 0,
    left: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "0 0 300px 300px",
    marginLeft: -100,
    marginBottom: -50
  }
}));
export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "260px"
});