"use client";

import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme"; 
// LOCAL CUSTOM COMPONENT

import ApexChart from "./apex-chart"; 
// Local CUSTOM COMPONENT

import Card2 from "./card-2"; 
// CHART OPTIONS

import * as options from "./chart-options"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
export default function Sales() {
  const theme = useTheme(); 
// weekly chart series

  const series = [{
    name: "Weekly",
    data: [7600, 8500, 10100, 9800, 8700, 1050, 9100]
  }];
  const totalOrderSeries = [{
    name: "Weekly",
    data: [7600, 8500, 10100, 9800, 8700, 1050, 9100]
  }];
  return <div>
      <Grid container spacing={3}>
        {
        /* WEEKLY SALE CHART */
      }
        <Grid item lg={3} md={6} xs={12}>
          <Card2 title="Weekly Sales" percentage="25.25%" amount={currency(10240, 0)}>
            <ApexChart type="bar" height={100} series={series} options={options.weeklyChartOptions(theme)} />
          </Card2>
        </Grid>

        {
        /* PRODUCT SHARE CHART */
      }
        <Grid item lg={3} md={6} xs={12}>
          <Card2 title="Product Share" percentage="10.25%" amount="39.56%">
            <ApexChart height={130} series={[75]} type="radialBar" options={options.productShareChartOptions(theme)} />
          </Card2>
        </Grid>

        {
        /* TOTAL ORDERS CHART */
      }
        <Grid item lg={3} md={6} xs={12}>
          <Card2 title="Total Order" percentage="2.65%" amount={currency(12260, 0)}>
            <ApexChart type="area" height={80} series={totalOrderSeries} options={options.totalOrderChartOptions(theme)} />
          </Card2>
        </Grid>

        {
        /* MARKET SHARE CHART */
      }
        <Grid item lg={3} md={6} xs={12}>
          <Card2 title="Market Share" percentage="2.65%" amount={currency(14260, 0)}>
            <ApexChart height={130} type="radialBar" series={[44, 55, 67]} options={options.marketShareChartOptions(theme)} />
          </Card2>
        </Grid>
      </Grid>
    </div>;
}