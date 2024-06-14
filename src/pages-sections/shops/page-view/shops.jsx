import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination"; 
// Local CUSTOM COMPONENT

import ShopCard from "../shop-card"; 
// GLOBAL CUSTOM COMPONENTS

import { H2, Span } from "components/Typography";
import { FlexBetween } from "components/flex-box"; 
// CUSTOM DATA MODEL


// =============================================
export default function ShopsPageView({
  shops
}) {
  return <Container className="mt-2 mb-3">
      <H2 mb={3}>All Shops</H2>

      {
      /* ALL SHOP LIST AREA */
    }
      <Grid container spacing={3}>
        {shops.map(item => <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ShopCard name={item.name} slug={item.slug} phone={item.phone} address={item.address} rating={item.rating || 5} coverPicture={item.coverPicture} profilePicture={item.profilePicture} />
          </Grid>)}
      </Grid>

      {
      /* PAGINATION AREA */
    }
      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 300 Shops</Span>
        <Pagination count={shops.length} variant="outlined" color="primary" />
      </FlexBetween>
    </Container>;
}