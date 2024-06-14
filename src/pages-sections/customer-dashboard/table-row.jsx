import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
const TableRow = styled(Card)(({
  theme
}) => ({
  gap: 16,
  marginBlock: 16,
  display: "grid",
  borderRadius: 10,
  cursor: "pointer",
  alignItems: "center",
  padding: ".6rem 1.2rem",
  gridTemplateColumns: "1.5fr 2fr 1.5fr auto",
  [theme.breakpoints.down("sm")]: {
    gap: 8,
    gridTemplateColumns: "repeat(2, 1fr)"
  }
}));
export default TableRow;