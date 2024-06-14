import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM COMPONENTS

import { SectionHeader } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductGridList({
  products,
  heading
}) {
  return <Box flex="1 1 0">
      <SectionHeader title={heading} seeMoreLink="#" />

      <Grid container spacing={3}>
        {products.map(item => <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1 hoverEffect id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Grid>)}
      </Grid>
    </Box>;
}