import styled from "@mui/material/styles/styled"; 
// styled components

export const Wrapper = styled("div", {
  shouldForwardProp: prop => prop !== "img"
})(({
  theme,
  img
}) => ({
  top: "50%",
  padding: 0,
  left: "50%",
  width: "100%",
  maxWidth: 1020,
  height: "auto",
  borderRadius: 8,
  outline: "none",
  position: "absolute",
  boxShadow: theme.shadows[3],
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  ".content": {
    zIndex: 2,
    padding: 24,
    textAlign: "center",
    position: "relative"
  },
  ".clear-btn": {
    top: 8,
    right: 8,
    zIndex: 2,
    position: "absolute",
    color: theme.palette.grey[900]
  },
  ".emailInput": {
    marginBottom: 16,
    "& input": {
      padding: 16,
      textAlign: "center"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.grey[300]
    }
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: 24,
    maxWidth: 620
  },
  [theme.breakpoints.up("md")]: {
    padding: 32,
    height: 550,
    ":after": {
      content: "''",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left",
      top: 0,
      left: 0,
      zIndex: 1,
      position: "absolute",
      ...(theme.direction === "rtl" && {
        right: 0,
        marginRight: "auto",
        backgroundPosition: "right",
        transform: "rotateX(180deg) rotateZ(180deg)"
      })
    }
  }
}));