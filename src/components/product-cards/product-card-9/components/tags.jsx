import styled from "@mui/material/styles/styled";
import Link from "next/link"; 
// STYLED COMPONENTS

const StyledRoot = styled("div")(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "& p": {
    fontSize: 11,
    fontWeight: 700,
    display: "inline-block",
    textDecoration: "underline"
  }
})); 
// ==============================================================


// ==============================================================
export default function ProductTags({
  tags
}) {
  return <StyledRoot>
      {tags.map(item => <Link href="#" key={item}>
          <p>{item}</p>
        </Link>)}
    </StyledRoot>;
}