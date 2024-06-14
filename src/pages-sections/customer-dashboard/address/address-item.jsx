import Link from "next/link";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// LOCAL CUSTOM COMPONENT

import TableRow from "../table-row"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function AddressListItem({
  address,
  handleDelete
}) {
  const {
    title,
    street,
    city,
    phone,
    id
  } = address || {};
  return <Link href={`/address/${id}`}>
      <TableRow>
        <Paragraph ellipsis>{title}</Paragraph>
        <Paragraph ellipsis>{`${street}, ${city}`}</Paragraph>
        <Paragraph ellipsis>{phone}</Paragraph>
        <Paragraph color="grey.600">
          <IconButton>
            <Edit fontSize="small" color="inherit" />
          </IconButton>

          <IconButton onClick={e => {
          e.stopPropagation();
          handleDelete(id);
        }}>
            <Delete fontSize="small" color="inherit" />
          </IconButton>
        </Paragraph>
      </TableRow>
    </Link>;
}