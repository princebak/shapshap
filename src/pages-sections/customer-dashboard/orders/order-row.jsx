import Link from "next/link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { format } from "date-fns"; 
// GLOBAL CUSTOM COMPONENT

import { H5, Paragraph } from "components/Typography"; 
// Local CUSTOM COMPONENT

import TableRow from "../table-row"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// =================================================
export default function OrderRow({
  order
}) {
  const getColor = status => {
    switch (status) {
      case "Pending":
        return "secondary";

      case "Processing":
        return "secondary";

      case "Delivered":
        return "success";

      case "Cancelled":
        return "primary";

      default:
        return "default";
    }
  };

  return <Link href={`/orders/${order.id}`}>
      <TableRow sx={{
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr"
    }}>
        <H5 ellipsis>#{order.id.substring(0, 18)}</H5>

        <Box textAlign="center">
          <Chip size="small" label={order.status} color={getColor(order.status)} />
        </Box>

        <Paragraph textAlign={{
        sm: "center",
        xs: "left"
      }}>
          {format(new Date(order.createdAt), "MMM dd, yyyy")}
        </Paragraph>

        <Paragraph textAlign="center">{currency(order.totalPrice)}</Paragraph>

        <Box display={{
        sm: "inline-flex",
        xs: "none"
      }} justifyContent="end">
          <IconButton>
            <East fontSize="small" sx={{
            color: "grey.500",
            transform: ({
              direction
            }) => `rotate(${direction === "rtl" ? "180deg" : "0deg"})`
          }} />
          </IconButton>
        </Box>
      </TableRow>
    </Link>;
}