import {
  fees,
  PAGE_LIMIT,
  TOKEN_VALIDITY,
  userTokenStatus,
  userType,
} from "./constants";

export function dbObjectToJsObject(dbObject) {
  return JSON.parse(JSON.stringify(dbObject));
}

export function convertToSubCurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

export function groupListByVendor(list) {
  const listtGroupedByOwner = [];
  for (const item of list) {
    const owner = item.owner;
    if (!listtGroupedByOwner[owner]) {
      listtGroupedByOwner[owner] = [];
    }
    listtGroupedByOwner[owner].push(item);
  }
  return listtGroupedByOwner;
}

export function getItemPrice(item) {
  return item?.price - (item?.price * (item?.discount || 0)) / 100;
}

export function getTotalGrossPriceAndDiscount(list) {
  let grossTotalPrice = 0;
  let totalDiscount = 0;
  for (const item of list) {
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

export function getTotalNetPrice(list, accountType) {
  const { grossTotalPrice, totalDiscount } =
    getTotalGrossPriceAndDiscount(list);

  let totalNetPrice = grossTotalPrice - totalDiscount;

  totalNetPrice =
    accountType === userType.MERCHANT
      ? totalNetPrice - (totalNetPrice * fees.COMMISSION) / 100
      : totalNetPrice +
        (totalNetPrice * fees.TAX) / 100 -
        (totalNetPrice * fees.SHIPPING) / 100;

  return totalNetPrice;
}

export const getContentWithPagination = (list, page, search) => {
  // Filters
  const filteredList = list.filter((item) => {
    const regExp = new RegExp(search);
    const myJSON = JSON.stringify(item);

    return regExp.test(myJSON);
  });

  const totalPages = Math.ceil(filteredList.length / PAGE_LIMIT);

  // Sorting
  filteredList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Pagination
  const pageNumber = Number.parseInt(page);

  const currentPage =
    pageNumber < 1 ? 1 : pageNumber > totalPages ? totalPages : pageNumber;

  const startIndex = (currentPage - 1) * PAGE_LIMIT;
  let listByPage = [];

  let index = startIndex;
  while (index >= 0 && index < filteredList.length) {
    listByPage.push(filteredList[index]);
    index++;
    if (listByPage.length === PAGE_LIMIT) {
      break;
    }
  }

  const res = {
    content: listByPage,
    totalElements: filteredList.length,
    pageLimit: PAGE_LIMIT,
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  return res;
};

export const getTheDesiredPage = (str) => {
  // Regular expression to match a number after "Go to page "
  const regex = /Go to page (\d+)/;

  // Extract the number using the match method
  const match = str.match(regex);

  return match ? Number.parseInt(match[1]) : 1;
};

export const isTheUserTokenValid = (token) => {
  const expirationDate = new Date(
    token.updatedAt.getTime() + TOKEN_VALIDITY * 60000
  );
  const currentDate = new Date();
  return (
    currentDate.getTime() < expirationDate.getTime()
  );
};
