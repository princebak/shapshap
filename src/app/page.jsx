import ShopLayout1 from "components/layouts/shop-layout-1";
import MarketOnePageView from "pages-sections/market-1/page-view";
import getMetadata from "../utils/metadata";

export const metadata = getMetadata();

export default async function MarketOne() {
  return (
    <ShopLayout1>
      <MarketOnePageView />
    </ShopLayout1>
  );
}
