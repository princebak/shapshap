import db from "data/product-database";
export const getWishListProducts = async page => {
  const products = db.slice(0, 30);
  const PAGE_SIZE = 6;
  const PAGE_NUMBER = page ? Number(page) : 1;
  const currentProducts = products.slice((PAGE_NUMBER - 1) * PAGE_SIZE, PAGE_NUMBER * PAGE_SIZE);
  return {
    products: currentProducts,
    totalProducts: products.length
  };
};