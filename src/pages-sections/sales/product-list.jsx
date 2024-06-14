import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM COMPONENT

import ProductCard1 from "components/product-cards/product-card-1"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductList({
  products
}) {
  return <Grid container spacing={3} minHeight={500}>
      {products.map(item => <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
          <ProductCard1 id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
        </Grid>)}
    </Grid>;
}