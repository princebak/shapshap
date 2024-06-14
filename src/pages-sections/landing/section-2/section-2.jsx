import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// CUSTOM COMPONENTS

import { H2, H4 } from "components/Typography";
import BazaarImage from "components/BazaarImage"; 
// STYLED COMPONENTS

import { StyledCard, StyledContent } from "./styles"; 
// LIST DATA

const LIST = [{
  icon: "verify",
  title: "SEO Friendly"
}, {
  icon: "cloud-data",
  title: "REST API"
}, {
  icon: "multivendor",
  title: "Multi-Vendor Support"
}, {
  icon: "optimization",
  title: "Optimized for Mobile"
}, {
  icon: "code",
  title: "Clean Code"
}, {
  icon: "lighting",
  title: "Fast"
}, {
  icon: "admin-dashboard",
  title: "Admin Dashboard"
}, {
  icon: "figma",
  title: "Figma Ready"
}];
export default function Section2() {
  return <Container id="features" className="mt-9">
      <H2 mb={8} fontSize={28} fontWeight="700" textAlign="center" color="secondary.main" textTransform="uppercase">
        Powerful Features
      </H2>

      <StyledContent>
        <Grid container spacing={7}>
          {LIST.map(item => <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <StyledCard elevation={3}>
                <BazaarImage alt={item.title} src={`/assets/images/icons/${item.icon}.svg`} sx={{
              mb: "1.5rem",
              height: 64
            }} />
                <H4 fontSize="18px" fontWeight="700" maxWidth="200px" textAlign="center" mx="auto">
                  {item.title}
                </H4>
              </StyledCard>
            </Grid>)}
        </Grid>
      </StyledContent>
    </Container>;
}