"use client";

import { DashboardPageView } from "pages-sections/vendor-dashboard/dashboard/page-view";
import { useSelector } from "react-redux";

export default function VendorDashboard() {
  const { currentUser } = useSelector((state) => state.user);

  return <DashboardPageView userType={currentUser?.type} />;
}
