import styled from "@mui/material/styles/styled";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel"; 
// CUSTOM ICON COMPONENT

import UpDown from "icons/UpDown"; 
// STYLED COMPONENTS

const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 600,
  padding: "16px 20px",
  color: theme.palette.grey[900]
})); 
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
export default function TableHeader(props) {
  const {
    order,
    heading,
    orderBy,
    rowCount,
    numSelected,
    onRequestSort,
    onSelectAllClick = () => {},
    hideSelectBtn = false
  } = props;
  return <TableHead sx={{
    backgroundColor: "grey.200"
  }}>
      <TableRow>
        {!hideSelectBtn ? <StyledTableCell align="left">
            <Checkbox color="info" checked={rowCount > 0 && numSelected === rowCount} onChange={event => onSelectAllClick(event.target.checked, "product")} />
          </StyledTableCell> : null}

        {heading.map(headCell => <StyledTableCell key={headCell.id} align={headCell.align} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} onClick={() => onRequestSort(headCell.id)} direction={orderBy === headCell.id ? order : "asc"} sx={{
          "& .MuiTableSortLabel-icon": {
            opacity: 1
          }
        }} IconComponent={() => <UpDown sx={{
          fontSize: 14,
          ml: 1,
          color: "grey.600"
        }} />}>
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>)}
      </TableRow>
    </TableHead>;
}