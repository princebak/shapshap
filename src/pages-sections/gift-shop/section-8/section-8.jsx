import Button from "@mui/material/Button";
import Container from "@mui/material/Container"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography"; 
// STYLED COMPONENT

import { RootStyle } from "./styles"; 
// IMPORT BANNER IMAGE

import banner from "../../../../public/assets/images/banners/banner-54.png";
export default async function Section8() {
  return <Container className="mt-4 pb-4">
      <RootStyle>
        <LazyImage src={banner} alt="banner" className="banner" />

        <div className="content">
          <Paragraph fontSize={{
          md: 18,
          xs: 14
        }}>Summer Offer!</Paragraph>

          <H3 mt={2} mb={3} lineHeight={1} fontSize={{
          xl: 48,
          lg: 42,
          xs: 36
        }}>
            30% off for All Items
          </H3>

          <Button variant="contained" color="primary" disableElevation>
            Shop Now
          </Button>
        </div>
      </RootStyle>
    </Container>;
}