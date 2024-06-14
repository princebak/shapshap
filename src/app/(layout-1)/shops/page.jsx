import { notFound } from "next/navigation";
// API FUNCTIONS

import api from "utils/__api__/shop";
// PAGE VIEW COMPONENT

import { ShopsPageView } from "pages-sections/shops/page-view";
import getMetadata from "../../../utils/metadata";

export const metadata = getMetadata("ShapShap | shops");

export default async function Shops() {
  try {
    const shops = await api.getShopList();
    return <ShopsPageView shops={shops} />;
  } catch (error) {
    notFound();
  }
}
