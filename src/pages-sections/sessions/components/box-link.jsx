import Link from "next/link";
import Box from "@mui/material/Box"; 
// ==============================================================


// ==============================================================
export default function BoxLink({
  href,
  title
}) {
  return <Box href={href} component={Link} fontWeight={600} borderColor="grey.900" borderBottom="1px solid">
      {title}
    </Box>;
}