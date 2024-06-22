import categoriesMegaMenu from "./categoriesMegaMenu";
// MEGA-MENU DATA

const megaMenus = [
  [
    {
      title: "User Account",
      child: [
        {
          title: "Order List",
          url: "/orders",
        },
        {
          title: "Order Details",
          url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
        {
          title: "View Profile",
          url: "/profile",
        },
        {
          title: "Edit Profile",
          url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
        },
        {
          title: "Address List",
          url: "/address",
        },
        {
          title: "Add Address",
          url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
        },
        {
          title: "All tickets",
          url: "/support-tickets",
        },
        {
          title: "Ticket details",
          url: "/support-tickets/when-will-my-product-arrive",
        },
        {
          title: "Wishlist",
          url: "/wish-list",
        },
      ],
    },
  ],
  [
    {
      title: "Vendor Account",
      child: [
        {
          title: "Dashboard",
          url: "/vendor/dashboard",
        },
        {
          title: "Profile",
          url: "/vendor/account-settings",
        },
      ],
    },
    {
      title: "Products",
      child: [
        {
          title: "All products",
          url: "/admin/products",
        },
        {
          title: "Add/Edit product",
          url: "/admin/products/create",
        },
      ],
    },
    {
      title: "Orders",
      child: [
        {
          title: "All orders",
          url: "/admin/orders",
        },
        {
          title: "Order details",
          url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
      ],
    },
    {
      title: "Authentication",
      child: [
        {
          title: "Login",
          url: "/login",
        },
        {
          title: "Register",
          url: "/register",
        },
      ],
    },
  ],
  [
    {
      title: "Sale Page",
      child: [
        {
          title: "Sales Version 1",
          url: "/sales-1",
        },
        {
          title: "Sales Version 2",
          url: "/sales-2",
        },
      ],
    },
    {
      title: "Shop",
      child: [
        {
          title: "Search product",
          url: "/products/search/mobile phone",
        },
        {
          title: "Single product",
          url: "/products/lord-2019",
        },
        {
          title: "Cart",
          url: "/cart",
        },
        {
          title: "Checkout",
          url: "/checkout",
        },
        {
          title: "Alternative Checkout",
          url: "/checkout-alternative",
        },
        {
          title: "Order confirmation",
          url: "/order-confirmation",
        },
      ],
    },
  ],
];
// MAIN NAVIGATION DATA

const navbarNavigation = [
  {
    title: "Home",
    megaMenu: false,
    megaMenuWithSub: false,
    url: "/",
  },
  {
    title: "Articles",
    megaMenu: false,
    megaMenuWithSub: false,
    url: "/articles",
  },
  {
    title: "Shops",
    megaMenu: false,
    megaMenuWithSub: false,
    url: "/shops",
  },

  /*   {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Vendor Account",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
      },
      {
        title: "Products",
        child: [
          {
            title: "All products",
            url: "/vendor/products",
          },
          {
            title: "Add/Edit product",
            url: "/vendor/products/lord-2019",
          },
        ],
      },
      {
        title: "Orders",
        child: [
          {
            title: "All orders",
            url: "/admin/orders",
          },
          {
            title: "Order details",
            url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
          },
        ],
      },
      {
        title: "Profile",
        url: "/vendor/account-settings",
      },
    ],
  }, */
];
export default navbarNavigation;
