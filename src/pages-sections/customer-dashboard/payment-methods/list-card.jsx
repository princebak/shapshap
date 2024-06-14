import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { H5, Paragraph } from "components/Typography"; 
// Local CUSTOM COMPONENT

import TableRow from "../table-row"; 
// ==============================================================


// ==============================================================
export default function ListCard({
  exp,
  card_no,
  payment_method
}) {
  return <TableRow>
      <FlexBox alignItems="center" gap={1}>
        <Card sx={{
        width: 42,
        height: 28,
        borderRadius: 1
      }}>
          <Image width={42} height={30} alt={payment_method} src={`/assets/images/payment-methods/${payment_method}.svg`} />
        </Card>

        <H5>Ralf Edward</H5>
      </FlexBox>

      <Paragraph>{card_no}</Paragraph>

      <Paragraph>{exp}</Paragraph>

      <Paragraph textAlign="center" color="grey.600">
        <IconButton LinkComponent={Link} href="/payment-methods/xkssThds6h37sd">
          <Edit fontSize="small" color="inherit" />
        </IconButton>

        <IconButton onClick={e => e.stopPropagation()}>
          <Delete fontSize="small" color="inherit" />
        </IconButton>
      </Paragraph>
    </TableRow>;
}