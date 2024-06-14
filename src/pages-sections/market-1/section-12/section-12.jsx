import Link from "next/link";
import Box from "@mui/material/Box"; 
// CUSTOM ICON COMPONENT

import GiftBox from "icons/GiftBox"; 
// GLOBAL CUSTOM COMPONENTS

import { H6 } from "components/Typography";
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import BazaarCard from "components/BazaarCard";
import { Carousel } from "components/carousel";
import FlexBox from "components/flex-box/flex-box";
import { SectionCreator } from "components/section-header"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section12() {
  const bigDiscountList = await api.getBigDiscountList();
  const responsive = [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 959,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 370,
    settings: {
      slidesToShow: 1
    }
  }];
  return <SectionCreator icon={<GiftBox />} title="Big Discounts" seeMoreLink="#">
      <Carousel dots slidesToShow={6} responsive={responsive}>
        {bigDiscountList.map(({
        id,
        title,
        thumbnail,
        price,
        discount,
        slug
      }) => <Box key={id} pb={1}>
            <BazaarCard className="p-1">
              <Link href={`/products/${slug}`}>
                <HoverBox borderRadius={2} mb={1}>
                  <LazyImage width={500} height={500} alt={title} src={thumbnail} />
                </HoverBox>

                <H6 mb={0.5}>{title}</H6>

                <FlexBox gap={1}>
                  <H6 color="primary.main">{calculateDiscount(price, discount)}</H6>
                  <Box component="del" fontWeight={600} color="grey.600">
                    {currency(price)}
                  </Box>
                </FlexBox>
              </Link>
            </BazaarCard>
          </Box>)}
      </Carousel>
    </SectionCreator>;
}