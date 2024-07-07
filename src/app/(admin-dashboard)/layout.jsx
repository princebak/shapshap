"use client";

import Loading from "app/loading";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "redux/slices/userSlice";

import { userType } from "utils/constants";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();
  let { currentUser } = useSelector((state) => state.user);

  const { data: session } = useSession();
  const dispatch = useDispatch();

  if (session) {
    dispatch(loginSuccess(session.user));
    currentUser = session.user;
  }

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
