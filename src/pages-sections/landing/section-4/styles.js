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
    height: 150,
    width: 150,
    top: 0,
    right: 0,
    background: "#fbeef0",
    zIndex: -1,
    borderRadius: "300px",
    marginRight: -75,
    marginTop: -51
  },
  "&:before": {
    content: '" "',
    position: "absolute",
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "300px",
    marginLeft: -75,
    marginBottom: -75
  }
}));