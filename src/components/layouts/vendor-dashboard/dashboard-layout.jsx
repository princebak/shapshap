"use client";

import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import BodyWrapper from "./dashboard-body-wrapper";
import DashboardNavbar from "./dashboard-navbar/dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar/dashboard-sidebar"; 
// LOCAL LAYOUT CONTEXT PROVIDER

import { LayoutProvider } from "./dashboard-layout-context";
export default function VendorDashboardLayout({
  children
}) {
  return <LayoutProvider>
      {
      /* DASHBOARD SIDEBAR NAVIGATION */
    }
      <DashboardSidebar />

      <BodyWrapper>
        {
        /* DASHBOARD HEADER / TOP BAR AREA */
      }
        <DashboardNavbar />

        {
        /* MAIN CONTENT AREA */
      }
        <Container maxWidth="lg">{children}</Container>
      </BodyWrapper>
    </LayoutProvider>;
}