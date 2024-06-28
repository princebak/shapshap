"use client";

import Loading from "app/loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardPageView } from "pages-sections/vendor-dashboard/dashboard/page-view";
import { userType } from "utils/constants";

export default async function VendorDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  if (user && user.type === userType.BUYER) {
    router.replace("/profile");
    return <Loading />;
  } else {
    return <DashboardPageView userType={session?.user?.type} />;
  }
}
