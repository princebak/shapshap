import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
export const SearchOutlinedIcon = styled(SearchOutlined)(({
  theme
}) => ({
  color: theme.palette.grey[600],
  marginRight: 6
}));
export const SearchResultCard = styled(Card)({
  zIndex: 99,
  top: "100%",
  width: "100%",
  position: "absolute",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem"
});
export const DropDownHandler = styled(Box)(({
  theme
}) => ({
  width: 160,
  minWidth: 160,
  height: "100%",
  display: "flex",
  whiteSpace: "pre",
  alignItems: "center",
  gap: theme.spacing(0.5),
  justifyContent: "flex-end",
  color: theme.palette.grey[700],
  paddingInline: theme.spacing(3),
  borderLeft: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.down("xs")]: {
    display: "none"
  }
}));