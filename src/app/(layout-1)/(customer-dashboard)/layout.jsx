"use client";

import Loading from "app/loading";
import { CustomerDashboardLayout } from "components/layouts/customer-dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || !session.user.type === "buyer") {
    router.replace("/login");

    return <Loading />;
  } else {
    return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
  }
}
