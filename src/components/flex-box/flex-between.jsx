import Box from "@mui/material/Box";
export default function FlexBetween({
  children,
  ...props
}) {
  return <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
      {children}
    </Box>;
}