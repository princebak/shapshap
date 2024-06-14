"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterList from "@mui/icons-material/FilterList"; 
// GLOBAL CUSTOM COMPONENTS

import SideNav from "components/side-nav";
import ProductsGridView from "components/products-view/products-grid-view"; 
// Local CUSTOM COMPONENTS

import ShopIntroCard from "../shop-intro-card";
import ProductFilterCard from "../../product-details/product-filter-card"; 
// CUSTOM DATA MODEL


// ============================================================
export default function ShopDetailsPageView({
  shop
}) {
  const isDownMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  return <Container className="mt-2 mb-3">
      {
      /* SHOP INTRODUCTION AREA */
    }
      <ShopIntroCard name={shop.name} phone={shop.phone} address={shop.address} coverPicture={shop.coverPicture} profilePicture={shop.profilePicture} />

      <Grid container spacing={3}>
        {
        /* SIDEBAR AREA */
      }
        <Grid item md={3} xs={12} sx={{
        display: {
          md: "block",
          xs: "none"
        }
      }}>
          <ProductFilterCard />
        </Grid>

        <Grid item md={9} xs={12}>
          {
          /* SMALL DEVICE SIDEBAR AREA */
        }
          {isDownMd && <SideNav position="left" handler={close => <IconButton sx={{
          float: "right"
        }} onClick={close}>
                  <FilterList fontSize="small" />
                </IconButton>}>
              <ProductFilterCard />
            </SideNav>}

          {
          /* PRODUCT LIST AREA */
        }
          <ProductsGridView products={shop.products.slice(0, 9)} />
        </Grid>
      </Grid>
    </Container>;
}