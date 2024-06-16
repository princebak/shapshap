import { notFound } from "next/navigation";
import { OrderDetailsPageView } from "pages-sections/vendor-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Order Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function OrderDetails({
  params
}) {
  try {
    const order = await api.getOrder(String(params.id));
    return <OrderDetailsPageView order={order} />;
  } catch (error) {
    notFound();
  }
}