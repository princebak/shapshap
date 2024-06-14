
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION

// YOU NEED TO BUILD YOUR OWN SERVER

// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION

// CONTACT US AT support@ui-lib.com
import shuffle from "lodash/shuffle";
import { uniqueProducts, slugs, search } from "./data";
export const ProductsEndpoints = Mock => {
  Mock.onGet("/api/products").reply(async () => {
    try {
      return [200, uniqueProducts];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  }); 
// single product based on slug

  Mock.onGet("/api/products/slug").reply(async config => {
    try {
      if (config?.params?.slug) {
        const product = uniqueProducts.find(item => item?.slug === config.params.slug);
        if (product) return [200, product];else return [404, {
          message: "Product not found"
        }];
      }

      return [200, shuffle(uniqueProducts)[0]];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  }); //all products slug list

  Mock.onGet("/api/products/slug-list").reply(async () => {
    try {
      return [200, slugs];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  }); 
// search products

  Mock.onGet("/api/products/search").reply(async () => {
    try {
      return [200, search];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });
};