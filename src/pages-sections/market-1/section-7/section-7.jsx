import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENT

import Sidebar from "./sidebar";
import ProductGridList from "../shared/product-grid"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section7() {
  const [products, shops, brands] = await Promise.all([api.getMobileList(), api.getMobileShops(), api.getMobileBrands()]);
  return <Container className="mb-5">
      <FlexBox gap="1.75rem">
        <Sidebar brands={brands} shops={shops} />
        <ProductGridList heading="Mobile Phones" products={products} />
      </FlexBox>
    </Container>;
}