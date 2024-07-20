import { fees, userType } from "./constants";

export function dbObjectToJsObject(dbObject) {
  return JSON.parse(JSON.stringify(dbObject));
}

export function convertToSubCurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

export function groupProductsByVendor(products) {
  
  const productstGroupedByOwner = [];
  for (const product of products) {
    const owner = product.owner;
    if (!productstGroupedByOwner[owner]) {
      productstGroupedByOwner[owner] = [];
    }
    productstGroupedByOwner[owner].push(product);
  }
  return productstGroupedByOwner;
}

export function getItemPrice(item) {
  return item?.price - (item?.price * (item?.discount || 0)) / 100;
}

export function getTotalGrossPriceAndDiscount(products) {
  let grossTotalPrice = 0;
  let totalDiscount = 0;
  for (const item of products) {

    grossTotalPrice = grossTotalPrice + (item.price || 0) * (item.qty || 0);
    totalDiscount =
      totalDiscount +
        (((item.discount || 0) * (item.price || 0)) / 100) * item.qty || 0;
  }

  return {
    grossTotalPrice,
    totalDiscount,
  };
}

export function getTotalNetPrice(products, accountType) {
  const { grossTotalPrice, totalDiscount } =
    getTotalGrossPriceAndDiscount(products);

  let totalNetPrice = grossTotalPrice - totalDiscount;

  totalNetPrice =
    accountType === userType.MERCHANT
      ? totalNetPrice - (totalNetPrice * fees.COMMISSION) / 100
      : totalNetPrice +
        (totalNetPrice * fees.TAX) / 100 -
        (totalNetPrice * fees.SHIPPING) / 100;

  return totalNetPrice;
}
