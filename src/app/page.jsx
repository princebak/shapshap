import ShopLayout1 from "components/layouts/shop-layout-1";
import MarketOnePageView from "pages-sections/market-1/page-view";

export const metadata = {
  title: "ShapShap",
  description: `ShapShap255 is a E-commerce platform with multiple Vendors.`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function MarketOne() {
  return (
    <ShopLayout1>
      <MarketOnePageView />
    </ShopLayout1>
  );
}
