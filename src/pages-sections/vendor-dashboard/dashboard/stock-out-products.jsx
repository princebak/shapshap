"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button"; 
// GLOBAL CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import { FlexBetween } from "components/flex-box"; 
// Local CUSTOM COMPONENT

import DataListTable from "./table"; 
// DATA TYPES


// table column list
const tableHeading = [{
  id: "product",
  label: "Product",
  alignRight: false
}, {
  id: "stock",
  label: "Stock",
  alignRight: false
}, {
  id: "amount",
  label: "Amount",
  alignCenter: true
}]; 
// ======================================================


// ======================================================
export default function StockOutProducts({
  data
}) {
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween px={3} py={2.5}>
        <H5>Stock Out Products</H5>

        <Button size="small" color="info" variant="outlined">
          All Products
        </Button>
      </FlexBetween>

      <DataListTable dataList={data} tableHeading={tableHeading} type="STOCK_OUT" />
    </Card>;
}