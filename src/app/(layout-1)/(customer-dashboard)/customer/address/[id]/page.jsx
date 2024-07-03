import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS

import api from "utils/__api__/address";
// CUSTOM DATA MODEL

export const metadata = {
  title: "Address - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function Address({ params }) {
  try {
    const address = await api.getAddress(params.id);
    return <AddressDetailsPageView address={address} />;
  } catch (error) {
    notFound();
  }
}
