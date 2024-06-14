import Button from "@mui/material/Button"; 
// ==================================================


// ==================================================
export default function WhiteButton({
  children,
  ...props
}) {
  const STYLE = {
    color: "dark.main",
    backgroundColor: "white",
    ":hover": {
      color: "#fff",
      backgroundColor: "dark.main"
    }
  };
  return <Button color="dark" variant="contained" sx={STYLE} {...props}>
      {children}
    </Button>;
}