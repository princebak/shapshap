import { uniq } from "lodash";
import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as gift } from "../gift/data";
import { products as market1 } from "../market-1/data";
import {
  relatedProducts,
  frequentlyBoughtData,
} from "../related-products/data";
const dbProducts = [...bazaarReactDatabase, ...products];
// all used products in the bazaar template

const productList = [
  ...dbProducts,
  ...gift,
  ...market1,
  ...relatedProducts,
  ...frequentlyBoughtData,
];
// get unique products from product list

const uniqueProducts = uniq(productList.map((item) => item.slug)).map((item) =>
  productList.find((it) => it.slug === item)
);
// get the all slugs

const slugs = uniqueProducts.map((item) => ({
  params: {
    slug: item?.slug,
  },
}));
// get product names for search

const search = uniqueProducts.slice(0, 6).map((item) => item?.title);
export { uniqueProducts, slugs, search };
