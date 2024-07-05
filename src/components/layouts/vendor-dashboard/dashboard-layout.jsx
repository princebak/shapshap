"use client";

import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENTS

import BodyWrapper from "./dashboard-body-wrapper";
import DashboardNavbar from "./dashboard-navbar/dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar/dashboard-sidebar";
// LOCAL LAYOUT CONTEXT PROVIDER

import { LayoutProvider } from "./dashboard-layout-context";
import { useSelector } from "react-redux";
import { userType as accountType, userStatus } from "utils/constants";
import MessageAlert from "components/MessageAlert";
import Link from "next/link";

export default function VendorDashboardLayout({ userType, children }) {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <LayoutProvider>
      {/* DASHBOARD SIDEBAR NAVIGATION */}
      <DashboardSidebar userType={userType} />

      <BodyWrapper>
        {/* DASHBOARD HEADER / TOP BAR AREA */}

        <DashboardNavbar
          userType={currentUser.userType}
          status={currentUser.status}
        />
        {currentUser.type === accountType.MERCHANT &&
        currentUser.status === userStatus.ACTIVE ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <MessageAlert
              message={{
                content: "Please update your profile first of all !",
                color: "red",
              }}
            />
            <Link href={"/vendor/account-settings"}>
              <u>go to accout settings</u>
            </Link>
          </div>
        ) : (
          <></>
        )}

        {/* MAIN CONTENT AREA */}
        <Container maxWidth="lg">{children}</Container>
      </BodyWrapper>
    </LayoutProvider>
  );
}
