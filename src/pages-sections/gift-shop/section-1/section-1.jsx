"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography"; 
// CUSTOM DATA MODEL


// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { StyledBox, StyledGrid, ContentWrapper, GridItemTwo, CarouselButton } from "./styles"; 
// ==========================================================


// ==========================================================
export default function Section1({
  carouselData
}) {
  const {
    palette
  } = useTheme();
  return <StyledBox id="carouselBox">
      <Container>
        <Carousel dots arrows={false} spaceBetween={0} slidesToShow={1} dotStyles={COMMON_DOT_STYLES} dotColor={palette.primary.main}>
          {carouselData.map(({
          id,
          title,
          subTitle,
          buttonText,
          imgUrl
        }) => <div key={id}>
              <StyledGrid container>
                <Grid item md={6} sm={6} xs={12}>
                  <ContentWrapper>
                    <Paragraph color="primary.main">{subTitle}</Paragraph>

                    <H1 maxWidth={600}>{title}</H1>

                    <CarouselButton disableElevation variant="contained">
                      {buttonText}
                    </CarouselButton>
                  </ContentWrapper>
                </Grid>

                <GridItemTwo item md={6} sm={6} xs={12}>
                  <LazyImage priority alt={title} width={600} height={450} src={imgUrl} />
                </GridItemTwo>
              </StyledGrid>
            </div>)}
        </Carousel>
      </Container>
    </StyledBox>;
}