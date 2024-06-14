import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// CUSTOM ICON COMPONENTS

import RankBadge from "icons/RankBadge";
import DottedStar from "icons/DottedStar"; 
// LOCAL CUSTOM COMPONENTS

import FeaturedProductCard from "../shared/featured-product-card";
import TopRatingProductCard from "../shared/top-rating-product-card"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { SectionHeader } from "components/section-header"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section4() {
  const [brands, products] = await Promise.all([api.getTopRatedBrand(), api.getTopRatedProduct()]);
  return <Container className="mb-4">
      <Grid container spacing={4}>
        {
        /* TOP RATINGS AREA */
      }
        <Grid item lg={6} xs={12}>
          <SectionHeader icon={<RankBadge />} title="Top Ratings" seeMoreLink="#" />

          <BazaarCard className="p-1">
            <Grid container spacing={4}>
              {products.map(item => <Grid item md={3} sm={6} xs={6} key={item.title}>
                  <Link href={`/products/${item.slug}`}>
                    <TopRatingProductCard title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} reviewCount={item.reviews.length} />
                  </Link>
                </Grid>)}
            </Grid>
          </BazaarCard>
        </Grid>

        {
        /* FEATURED BRANDS AREA */
      }
        <Grid item lg={6} xs={12}>
          <SectionHeader icon={<DottedStar />} title="Featured Brands" seeMoreLink="#" />

          <BazaarCard className="p-1">
            <Grid container spacing={3}>
              {brands.map(({
              id,
              name,
              image,
              slug
            }) => <Grid item sm={6} xs={12} key={id}>
                  <Link href={`/products/search/${slug}`}>
                    <FeaturedProductCard title={name} imgUrl={image} />
                  </Link>
                </Grid>)}
            </Grid>
          </BazaarCard>
        </Grid>
      </Grid>
    </Container>;
}