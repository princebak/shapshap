"use client";

import { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import { H2, H3, Span } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box"; 
// LOCAL CUSTOM COMPONENT

import FrequentlyProductCard from "./frequently-product-card"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// STYLED COMPONENTS
const WrapperBox = styled(Box)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    "& .card-holder": {
      flexDirection: "column"
    }
  }
})); 
// ============================================================


// ============================================================
export default function FrequentlyBought({
  products
}) {
  return <WrapperBox mb={7.5}>
      <H3 mb={3}>Frequently Bought Together</H3>

      <FlexBox className="card-holder" flexWrap="wrap" m={-1}>
        {products.map((item, ind) => <Fragment key={item.id}>
            <FrequentlyProductCard id={item.id} key={item.id} slug={item.slug} price={item.price} title={item.title} imgUrl={item.thumbnail} />

            {ind < products.length - 1 && <FlexRowCenter>
                <H2 color="grey.600" mx={1}>
                  +
                </H2>
              </FlexRowCenter>}
          </Fragment>)}

        <FlexRowCenter>
          <H2 color="grey.600" mx={3}>
            =
          </H2>
        </FlexRowCenter>

        <FlexRowCenter m={1} minWidth={300} minHeight={200} border="1px solid" borderRadius="8px" className="gray-box" borderColor="grey.400" flexDirection="column">
          <H3 color="primary.main">{currency(2500)}</H3>

          <Span mb={2} fontWeight="600" color="grey.600">
            Save {currency(500)}
          </Span>

          <FlexBox gap={1.5}>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>

            <Button variant="outlined" color="primary">
              Add to List
            </Button>
          </FlexBox>
        </FlexRowCenter>
      </FlexBox>
    </WrapperBox>;
}