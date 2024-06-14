"use client";

import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import Container from "@mui/material/Container";
import { ProductCard6 } from "components/product-cards/product-card-6"; 
// COMMON CAROUSEL STYLES

import { CAROUSEL_ARROW_STYLE } from "../styles"; 
// CUSTOM DATA MODEL


// =========================================================
export default function Section5({
  products
}) {
  const responsive = [{
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }];
  return <Container>
      <H2 fontWeight="bold" lineHeight="1" mb={3}>
        Popular Items
      </H2>

      <Carousel slidesToShow={4} responsive={responsive} arrowStyles={CAROUSEL_ARROW_STYLE}>
        {products.map(item => <Box pb={2} key={item.id}>
            <ProductCard6 id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} images={item.images} discount={item.discount} thumbnail={item.thumbnail} />
          </Box>)}
      </Carousel>
    </Container>;
}