import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENT

import AppStore from "./components/app-store";
import SocialLinks from "./components/social-links"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography"; 
// DATA

import { CUSTOMER_CARE_LINKS } from "./data"; 
// STYLED COMPONENTS

import { StyledRoot, StyledLink } from "./styles";
export default function Footer3() {
  return <StyledRoot>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={7} xs={12}>
            <Link href="/">
              <BazaarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
            </Link>

            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in
              gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at
              amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={5} xs={12}>
            {
            /* CUSTOMER CARE LINKS */
          }
            <Box mb={2} mt={{
            md: 6,
            xs: 2
          }}>
              {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink href="/" key={ind} sx={{
              color: "grey.300"
            }}>
                  {item}
                </StyledLink>)}
            </Box>

            {
            /* SOCIAL LINKS WITH ICON */
          }
            <SocialLinks />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>;
}