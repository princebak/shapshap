import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
export const MainContainer = styled("div")(({
  theme
}) => ({
  top: 50,
  right: 50,
  zIndex: 1501,
  position: "fixed",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  right: 50,
  zIndex: 99,
  bottom: 50,
  padding: 12,
  color: "#fff",
  position: "fixed",
  borderRadius: "50%",
  boxShadow: theme.shadows[12],
  backgroundColor: theme.palette.primary.main,
  ":hover": {
    backgroundColor: theme.palette.primary.main
  }
}));
export const BodyWrapper = styled("div", {
  shouldForwardProp: props => props !== "showBody"
})(({
  theme,
  showBody
}) => ({
  borderRadius: "4px",
  backgroundColor: "white",
  opacity: showBody ? 1 : 0,
  width: showBody ? 300 : 0,
  padding: showBody ? 24 : 0,
  boxShadow: theme.shadows[3],
  transition: "transform 0.4s",
  
// maxHeight: showBody ? "calc(100vh - 100px)" : 0,
  transform: `translateY(${showBody ? 0 : "10px"})`
}));
export const StyledAvatar = styled(Avatar)({
  flexGrow: 1,
  height: 100,
  width: "45%",
  cursor: "pointer",
  borderRadius: "10px",
  ":last-of-type": {
    flexGrow: 0
  },
  ":hover": {
    "&::after": {
      opacity: 0.5
    }
  },
  "::after": {
    opacity: 0,
    content: '""',
    width: "100%",
    height: "100%",
    background: "black",
    position: "absolute",
    transition: "all 0.3s"
  }
});