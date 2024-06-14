import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SectionHeader from "./section-header"; 
// ==============================================================


// ==============================================================
export default function SectionCreator(props) {
  const {
    icon,
    title,
    children,
    seeMoreLink,
    ...others
  } = props;
  return <Box mb={7.5} {...others}>
      <Container className="pb-1">
        {title ? <SectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} /> : null}

        {children}
      </Container>
    </Box>;
}