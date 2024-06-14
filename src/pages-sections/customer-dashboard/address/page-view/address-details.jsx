"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Place from "@mui/icons-material/Place"; 
// Local CUSTOM COMPONENT

import AddressForm from "../address-form";
import DashboardHeader from "../../dashboard-header"; 
// CUSTOM DATA MODEL


// =============================================================
export default function AddressDetailsPageView({
  address
}) {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Place} href="/address" title="Edit Address" buttonText="Back to Address" />

      {
      /* FORM AREA */
    }
      <Card sx={{
      p: 3,
      pt: 4
    }}>
        <AddressForm address={address} />
      </Card>
    </Fragment>;
}