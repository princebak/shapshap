import Link from "next/link";
import Grid from "@mui/material/Grid"; 
// CUSTOM ICON COMPONENT

import NewArrival from "icons/NewArrival"; 
// GLOBAL CUSTOM COMPONENTS

import HoverBox from "components/HoverBox";
import { H4 } from "components/Typography";
import LazyImage from "components/LazyImage";
import BazaarCard from "components/BazaarCard";
import { SectionCreator } from "components/section-header"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section5() {
  const newArrivalsList = await api.getNewArrivalList();
  return <SectionCreator icon={<NewArrival />} title="New Arrivals" seeMoreLink="#">
      <BazaarCard className="p-1">
        <Grid container spacing={3}>
          {newArrivalsList.map(({
          id,
          title,
          price,
          thumbnail,
          slug
        }) => <Grid item lg={2} md={3} sm={4} xs={6} key={id}>
              <Link href={`/products/${slug}`}>
                <HoverBox borderRadius={2} mb={1}>
                  <LazyImage width={180} height={180} alt={title} src={thumbnail} />
                </HoverBox>

                <H4 fontSize={14} mb={0.5}>
                  {title}
                </H4>

                <H4 fontSize={14} color="primary.main">
                  {currency(price)}
                </H4>
              </Link>
            </Grid>)}
        </Grid>
      </BazaarCard>
    </SectionCreator>;
}