import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import Sidebar from "./sidebar";
import ProductGridList from "../shared/product-grid"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section6() {
  const [products, brands] = await Promise.all([api.getCarList(), api.getCarBrands()]);
  return <Container className="mb-5">
      <FlexBox gap="1.75rem">
        <Sidebar brands={brands} />
        <ProductGridList heading="Cars" products={products} />
      </FlexBox>
    </Container>;
}