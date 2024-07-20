import { OrdersPageView } from "pages-sections/vendor-dashboard/orders/page-view";
// API FUNCTIONS

export const metadata = {
  title: "Orders - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function Orders() {
  return <OrdersPageView />;
}
