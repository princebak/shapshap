import Link from "next/link";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { format } from "date-fns"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph, Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function TicketCard({
  ticket
}) {
  const {
    id,
    slug,
    title,
    type,
    status,
    date,
    category
  } = ticket || {};
  return <Link href={`/support-tickets/${slug}`} key={id}>
      <FlexBetween component={Card} px={2.5} py={2} mb={2}>
        <div>
          <Paragraph mb={1.5} lineHeight={1}>
            {title}
          </Paragraph>

          <FlexBox alignItems="center" flexWrap="wrap" gap={1}>
            <Chip label={type} size="small" />
            <Chip label={status} size="small" color="success" />

            <Span className="pre" color="grey.600">
              {format(new Date(date), "MMM dd, yyyy")}
            </Span>

            <Span color="grey.600">{category}</Span>
          </FlexBox>
        </div>

        <IconButton>
          <East fontSize="small" sx={{
          color: "grey.500",
          transform: ({
            direction
          }) => `rotate(${direction === "rtl" ? "180deg" : "0deg"})`
        }} />
        </IconButton>
      </FlexBetween>
    </Link>;
}