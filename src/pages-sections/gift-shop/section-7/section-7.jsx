import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container"; 
// GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography";
import { ProductCard6 } from "components/product-cards/product-card-6"; 
// CUSTOM DATA MODEL


// =========================================================
const Section7 = ({
  products
}) => {
  return <Container>
      <H2 fontWeight="bold" lineHeight="1" my={3}>
        All Gift Items
      </H2>

      <Grid container mb={-0.5} spacing={3}>
        {products.map((item, ind) => <Grid key={ind} item md={3} sm={6} xs={12}>
            <ProductCard6 id={item.id} key={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} images={item.images} discount={item.discount} thumbnail={item.thumbnail} />
          </Grid>)}
      </Grid>

      <Box mt={8} display="flex" justifyContent="center">
        <Button color="primary" variant="contained" sx={{
        borderRadius: 0,
        padding: ".75em 1.5rem"
      }}>
          Load More...
        </Button>
      </Box>
    </Container>;
};

export default Section7;