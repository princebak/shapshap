import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENT

import Sidebar from "../section-7/sidebar";
import ProductGridList from "../shared/product-grid"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section13() {
  const [products, shops, brands] = await Promise.all([api.getOpticsList(), api.getOpticsShops(), api.getOpticsBrands()]);
  return <Container className="mb-5">
      <FlexBox gap="1.75rem">
        <Sidebar brands={brands} shops={shops} />
        <ProductGridList heading="Optics / Watch" products={products} />
      </FlexBox>
    </Container>;
}