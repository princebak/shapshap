import { DriversPageView } from "pages-sections/vendor-dashboard/drivers/page-view";
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Customers - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function Customers() {
  const customers = await api.customers();
  return <DriversPageView customers={customers} />;
}
