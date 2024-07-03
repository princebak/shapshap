"use client";

import { DashboardPageView } from "pages-sections/vendor-dashboard/dashboard/page-view";

export default function VendorDashboard() {
  return <DashboardPageView userType={currentUser?.type} />;
}
