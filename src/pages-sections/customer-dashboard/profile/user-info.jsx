import { format } from "date-fns";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import { Small, Span } from "components/Typography"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function UserInfo({
  user
}) {
  const downMd = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return <Card sx={{
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    p: "0.75rem 1.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    ...(downMd && {
      alignItems: "start",
      flexDirection: "column",
      justifyContent: "flex-start"
    })
  }}>
      <TableRowItem title="First Name" value={user.name.firstName} />
      <TableRowItem title="Last Name" value={user.name.lastName} />
      <TableRowItem title="Email" value={user.email} />
      <TableRowItem title="Phone" value={user.phone} />
      <TableRowItem title="Birth date" value={format(new Date(user.dateOfBirth), "dd MMM, yyyy")} />
    </Card>;
}

function TableRowItem({
  title,
  value
}) {
  return <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>;
}