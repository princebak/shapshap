import Box from "@mui/material/Box"; 
// CUSTOM ICON COMPONENT

import Light from "icons/Light"; 
// GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section2() {
  const flashDeals = await api.getFlashDeals();
  const responsive = [{
    breakpoint: 1279,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 959,
    settings: {
      slidesToShow: 3
    }
  }, {
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
  return <SectionCreator icon={<Light color="primary" />} title="Flash Deals">
      <Carousel responsive={responsive}>
        {flashDeals.map(item => <Box pb={0.6} key={item.id}>
            <ProductCard1 id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Box>)}
      </Carousel>
    </SectionCreator>;
}