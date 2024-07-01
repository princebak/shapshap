import duotone from "icons/duotone";
import { userType as accountType } from "utils/constants";

export const getNavigation = (userType) => {
  const adminNavigation = [
    {
      type: "label",
      label: "Admin",
    },
    {
      name: "Dashboard",
      icon: duotone.Dashboard,
      path: "/dashboard",
    },
    {
      name: "Refunds",
      icon: duotone.Refund,
      children: [
        {
          name: "Refund Request",
          path: "/admin/refund-request",
        },
        {
          name: "Refund Settings",
          path: "/admin/refund-setting",
        },
      ],
    },
    {
      name: "Sellers",
      icon: duotone.Seller,
      children: [
        {
          name: "Seller List",
          path: "/admin/sellers",
        },
        {
          name: "Seller Package",
          path: "/admin/seller-package",
        },
        {
          name: "Package Payments",
          path: "/admin/package-payments",
        },
        {
          name: "Earning History",
          path: "/admin/earning-history",
        },
        {
          name: "Payouts",
          path: "/admin/payouts",
        },
        {
          name: "Payout Request",
          path: "/admin/payout-requests",
        },
      ],
    },
    {
      name: "Customers",
      icon: duotone.Customers,
      path: "/admin/customers",
    },
    {
      name: "Drivers",
      icon: duotone.Customers,
      path: "/admin/drivers",
    },
    {
      name: "Logout",
      icon: duotone.Session,
      path: "/logout",
    },
  ];

  const vendorNavigation = [
    {
      type: "label",
      label: "Vendor",
    },
    {
      name: "Dashboard",
      icon: duotone.Dashboard,
      path: "/dashboard",
    },
    {
      name: "Products",
      icon: duotone.Products,
      children: [
        {
          name: "Product List",
          path: "/vendor/products",
        },
        {
          name: "Create Product",
          path: "/vendor/products/create",
        },
      ],
    },

    {
      name: "Orders",
      icon: duotone.Order,
      children: [
        {
          name: "Order List",
          path: "/vendor/orders",
        },
        {
          name: "Order Details",
          path: "/vendor/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
      ],
    },
    {
      name: "Customers",
      icon: duotone.Customers,
      path: "/vendor/customers",
    },
    {
      name: "Earnings",
      icon: duotone.ProjectChart,
      children: [
        {
          name: "Earning History",
          path: "/vendor/earning-history",
        },
        {
          name: "Payouts",
          path: "/vendor/payouts",
        },
        {
          name: "Payout Request",
          path: "/vendor/payout-requests",
        },
        {
          name: "Payout Settings",
          path: "/vendor/payout-settings",
        },
      ],
    },
    {
      name: "Refund Request",
      icon: duotone.Refund,
      path: "/vendor/refund-request",
    },
    {
      name: "Reviews",
      icon: duotone.Review,
      path: "/vendor/reviews",
    },

    {
      name: "Account Settings",
      icon: duotone.AccountSetting,
      path: "/vendor/account-settings",
    },
    {
      name: "Logout",
      icon: duotone.Session,
      path: "/logout",
    },
  ];

  if (userType === accountType.ADMIN) {
    return adminNavigation;
  } else {
    return vendorNavigation;
  }
};
