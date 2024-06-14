import Pagination from "@mui/material/Pagination"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
import { ProductCard9 } from "components/product-cards/product-card-9"; 
// CUSTOM DATA MODEL


// ==========================================================
export default function ProductsListView({
  products
}) {
  return <div>
      {products.map(item => <ProductCard9 id={item.id} key={item.id} slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />)}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </div>;
}