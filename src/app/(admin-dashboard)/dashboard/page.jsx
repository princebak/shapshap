"use client";

import Loading from "app/loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardPageView } from "pages-sections/vendor-dashboard/dashboard/page-view";
import { useSelector } from "react-redux";
import { userType } from "utils/constants";

export default function VendorDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  console.log("CurrentUser >>", currentUser);

  if (currentUser && currentUser.type === userType.BUYER) {
    router.replace("/profile");

    return <Loading />;
  } else {
    return <DashboardPageView userType={session?.currentUser?.type} />;
  }
}
