"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"; 
// GLOBAL CUSTOM COMPONENTS

import { H3, H4 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
export default function AvailableShops() {
  return <Box mb={7.5}>
      <H3 mb={3}>Also Available at</H3>

      <Grid container spacing={4}>
        {shopList.map(item => <Grid item lg={2} md={3} sm={4} xs={12} key={item.name}>
            <Link href="/shops/scarlett-beauty">
              <FlexRowCenter p={3.25} width="100%" component={Card} flexDirection="column">
                <Avatar alt={item.name} src={item.imgUrl} sx={{
              width: 48,
              height: 48
            }} />
                <H4 mt={1.5} color="grey.800">
                  {item.name}
                </H4>
              </FlexRowCenter>
            </Link>
          </Grid>)}
      </Grid>
    </Box>;
}
const shopList = [{
  name: "Tech Friend",
  imgUrl: "/assets/images/faces/propic.png"
}, {
  name: "Smart Shop",
  imgUrl: "/assets/images/faces/propic(1).png"
}, {
  name: "Gadget 360",
  imgUrl: "/assets/images/faces/propic(8).png"
}];