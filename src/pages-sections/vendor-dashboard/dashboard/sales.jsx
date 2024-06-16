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

  const series = [
    {
      name: "Weekly",
      data: [7600, 8500, 10100, 9800, 8700, 1050, 9100],
    },
  ];
  const totalOrderSeries = [
    {
      name: "Weekly",
      data: [7600, 8500, 10100, 9800, 8700, 1050, 9100],
    },
  ];
  return (
    <div>
      <Grid container spacing={3}>
        {/* MARKET SHARE CHART */}
        <Grid item md={6} xs={12}>
          <Card2
            title="Total Merchants"
            percentage="2.65%"
            amount={currency(14260, 0)}
          >
            <ApexChart
              height={130}
              type="radialBar"
              series={[44, 55, 67]}
              options={options.marketShareChartOptions(theme)}
            />
          </Card2>
        </Grid>

        {/* MARKET SHARE CHART */}
        <Grid item md={6} xs={12}>
          <Card2
            title="Total Customers"
            percentage="2.65%"
            amount={currency(14260, 0)}
          >
            <ApexChart
              height={130}
              type="radialBar"
              series={[44, 55, 67]}
              options={options.marketShareChartOptions(theme)}
            />
          </Card2>
        </Grid>
      </Grid>
    </div>
  );
}
