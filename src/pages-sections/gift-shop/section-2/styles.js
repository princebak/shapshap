import styled from "@mui/material/styles/styled";
export const ContentRoot = styled("div")(({
  theme
}) => ({
  gap: 12,
  borderRadius: 8,
  display: "flex",
  flexWrap: "wrap",
  background: "#fff",
  marginBottom: "2rem",
  alignItems: "center",
  padding: "1.5rem 2rem",
  border: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}));
export const IconBox = styled("div")(({
  theme
}) => ({
  padding: "12px",
  display: "flex",
  fontSize: "22px",
  borderRadius: "50%",
  alignItems: "center",
  backgroundColor: theme.palette.marron[100]
}));