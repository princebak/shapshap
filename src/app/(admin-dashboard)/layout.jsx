"use client";

import Loading from "app/loading";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { userType } from "utils/constants";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  console.log("Dashboard currentUser >>", currentUser);

  if (
    !currentUser ||
    (currentUser.type === userType.MERCHANT &&
      !pathname.startsWith("/vendor") &&
      pathname !== "/dashboard") ||
    (currentUser.type === userType.ADMIN &&
      !pathname.startsWith("/admin") &&
      pathname !== "/dashboard")
  ) {
    router.replace("/login");

    return <Loading />;
  } else if (currentUser.type === userType.BUYER) {
    router.replace("/customer/profile");

    return <Loading />;
  } else {
    return (
      <VendorDashboardLayout userType={currentUser?.type}>
        {children}
      </VendorDashboardLayout>
    );
  }
};

export default Layout;
