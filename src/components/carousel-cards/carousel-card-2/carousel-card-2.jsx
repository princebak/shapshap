import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; 
// MUI ICON COMPONENT

import Favorite from "@mui/icons-material/Favorite"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarImage from "components/BazaarImage";
import { Countdown } from "components/countdown";
import FlexBox from "components/flex-box/flex-box";
import { H2, H3, H4, Paragraph } from "components/Typography"; 
// STYLED COMPONENT

import { ContentWrapper, FavoriteButton } from "./styles"; 
// ================================================================


// ================================================================
export default function CarouselCard2({
  imgUrl,
  productName,
  expireDate
}) {
  return <Grid container alignItems="center">
      <Grid item lg={6} md={5} sm={12} xs={12}>
        <BazaarImage src={imgUrl} alt="xiaomi-watch-1" sx={{
        display: "block",
        mx: "auto",
        maxWidth: "100%",
        p: 5
      }} />
      </Grid>

      <Grid item lg={4} md={5} sm={12} xs={12}>
        <ContentWrapper>
          <H3 color="primary.500" mb="0.2rem">
            Deal Of The Day
          </H3>
          <H2>{productName}</H2>

          <Paragraph mt="0.3rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu,
            quam etiam at quis ut convallis.
          </Paragraph>

          <H4 mt="1.5rem" mb="0.3rem">
            Fresh Deal Everyday, Get It Now!
          </H4>

          {
          /* countdown time */
        }
          <Countdown expireDate={expireDate} />

          <FlexBox gap={2} mt={3}>
            <Button color="primary" disableElevation variant="contained" sx={{
            px: 4,
            borderRadius: 2
          }}>
              BUY NOW
            </Button>

            <FavoriteButton>
              <Favorite />
            </FavoriteButton>
          </FlexBox>
        </ContentWrapper>
      </Grid>
    </Grid>;
}