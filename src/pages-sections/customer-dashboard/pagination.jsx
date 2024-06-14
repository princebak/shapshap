import MuiPagination from "@mui/material/Pagination";
export default function Pagination(props) {
  return <MuiPagination sx={{
    display: "flex",
    justifyContent: "center",
    mt: 5
  }} {...props} />;
}