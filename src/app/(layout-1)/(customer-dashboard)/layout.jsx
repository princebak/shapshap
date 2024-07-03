"use client";

import Loading from "app/loading";
import { CustomerDashboardLayout } from "components/layouts/customer-dashboard";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();

  if (currentUser && currentUser.type !== "buyer") {
    router.replace("/login");

    return <Loading />;

  } else {
    return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
  }
}
