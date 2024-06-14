import Link from "next/link";
import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H2, H5, Paragraph } from "components/Typography"; 
// STYLED COMPONENTS

import { LeftCard, RightCard, StyledButton } from "./styles"; 
// IMPORT IMAGES

import offer1 from "../../../../public/assets/images/Gift Shop/Offer Card.png";
import offer2 from "../../../../public/assets/images/Gift Shop/Offer 1.png";
export default function Section3() {
  return <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={7}>
        <Link href="/sales-1">
          <LeftCard>
            <div className="content">
              <H5>Holiday’s Offer!</H5>
              <H2 color="primary.main">Sale 50% Off</H2>
              <Paragraph mb={1}>Use Code : Holi50</Paragraph>
              <StyledButton disableRipple disableTouchRipple>
                Shop Now
              </StyledButton>
            </div>

            <div className="img-wrapper">
              <LazyImage alt="offer" src={offer1} />
            </div>
          </LeftCard>
        </Link>
      </Grid>

      <Grid item xs={12} sm={5} md={5}>
        <Link href="/sales-1">
          <RightCard>
            <div className="content">
              <H5>Shop Online Gift Under</H5>
              <H2 color="primary.main">$20.00</H2>
              <StyledButton>Shop Now</StyledButton>
            </div>

            <div className="img-wrapper">
              <LazyImage alt="offer" src={offer2} />
            </div>
          </RightCard>
        </Link>
      </Grid>
    </Grid>;
}