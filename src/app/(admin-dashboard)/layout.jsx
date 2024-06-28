"use client";

import Loading from "app/loading";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { userType } from "utils/constants";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const { data: session } = useSession();
  const router = useRouter();

  if (
    !session ||
    (session.user.type === userType.MERCHANT &&
      !pathname.startsWith("/vendor") &&
      pathname !== "/dashboard") ||
    (session.user.type === userType.ADMIN &&
      !pathname.startsWith("/admin") &&
      pathname !== "/dashboard")
  ) {
    router.replace("/login");

    return <Loading />;
  } else {
    return (
      <VendorDashboardLayout userType={session?.user?.type}>
        {children}
      </VendorDashboardLayout>
    );
  }
};

export default Layout;
