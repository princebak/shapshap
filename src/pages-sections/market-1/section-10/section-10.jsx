import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// GLOBAL CUSTOM COMPONENTS

import { SectionHeader } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section10() {
  const products = await api.getMoreItems();
  return <Container className="mb-5">
      <SectionHeader title="More For You" seeMoreLink="#" />

      <Grid container spacing={3}>
        {products.map(item => <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <ProductCard1 hoverEffect id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Grid>)}
      </Grid>
    </Container>;
}