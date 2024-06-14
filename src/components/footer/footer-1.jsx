import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENT

import LogoSection from "./components/logo";
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// STYLED COMPONENTS

import { Heading } from "./styles";
export default function Footer1() {
  return <Box component="footer" bgcolor="#222935" mb={{
    sm: 0,
    xs: 7
  }}>
      <Box component={Container} color="white" overflow="hidden" py={{
      sm: 10,
      xs: 4
    }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LogoSection />
          </Grid>

          {
          /* ABOUT US LINKS */
        }
          <Grid item lg={2} md={6} sm={6} xs={12}>
            <AboutLinks />
          </Grid>

          {
          /* CUSTOMER CARE LINKS */
        }
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CustomerCareLinks />
          </Grid>

          {
          /* CONTACT & SOCIAL LINKS */
        }
          <Grid item lg={3} md={6} sm={6} xs={12}>
            {
            /* CONTACT INFORMATION */
          }
            <Heading>Contact Us</Heading>

            <Paragraph py={0.6} color="grey.500">
              70 Washington Square South, New York, NY 10012, United States
            </Paragraph>

            <Paragraph py={0.6} color="grey.500">
              Email: uilib.help@gmail.com
            </Paragraph>

            <Paragraph py={0.6} mb={2} color="grey.500">
              Phone: +1 1123 456 780
            </Paragraph>

            {
            /* SOCIAL LINKS WITH ICON */
          }
            <SocialLinks />
          </Grid>
        </Grid>
      </Box>
    </Box>;
}