import Link from "next/link";
import Box from "@mui/material/Box";
// ==============================================================

// ==============================================================
export default function BoxLink({ href, title, target, onClick }) {
  return (
    <Box
      href={href}
      target={target}
      component={Link}
      fontWeight={600}
      borderColor="grey.900"
      borderBottom="1px solid"
      onClick={onClick}
    >
      {title}
    </Box>
  );
}
