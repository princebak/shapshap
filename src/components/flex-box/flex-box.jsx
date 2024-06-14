import Box from "@mui/material/Box";
export default function FlexBox({
  children,
  ...props
}) {
  return <Box display="flex" {...props}>
      {children}
    </Box>;
}