import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// GLOBAL CUSTOM COMPONENT

import LazyImage from "components/LazyImage";
export default function Section8() {
  return <Container className="mb-5">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Link href="/">
            <LazyImage width={385} height={342} alt="banner" src="/assets/images/banners/banner-1.png" />
          </Link>
        </Grid>

        <Grid item xs={12} md={8}>
          <Link href="/">
            <LazyImage width={790} height={342} alt="banner" src="/assets/images/banners/banner-2.png" />
          </Link>
        </Grid>
      </Grid>
    </Container>;
}