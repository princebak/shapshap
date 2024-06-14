import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENT

export const ImageBox = styled("div")(({
  theme
}) => ({
  padding: 32,
  display: "flex",
  borderRadius: 16,
  justifyContent: "center",
  backgroundColor: theme.palette.grey[300]
}));