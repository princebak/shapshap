import { Market1Endpoints } from "./__db__/market-1";
import { GiftEndpoints } from "./__db__/gift";
import { RelatedProductsEndpoints } from "./__db__/related-products";
import { ShopEndpoints } from "./__db__/shop";
import { SalesEndpoints } from "./__db__/sales";
import { UsersEndpoints } from "./__db__/users";
import { TicketsEndpoints } from "./__db__/ticket";
import { VendorEndpoints } from "./__db__/vendor";
import { UserOrders1Endpoints } from "./__db__/orders";
import { UserAddressEndpoints } from "./__db__/address";
import { ProductsEndpoints } from "./__db__/products";
import { AdminDashboardEndpoints } from "./__db__/dashboard";

export const MockEndPoints = Mock => {
  Market1Endpoints(Mock);
  GiftEndpoints(Mock);
  ShopEndpoints(Mock);
  SalesEndpoints(Mock);
  UsersEndpoints(Mock);
  VendorEndpoints(Mock);
  TicketsEndpoints(Mock);
  ProductsEndpoints(Mock);
  UserAddressEndpoints(Mock);
  UserOrders1Endpoints(Mock);
  AdminDashboardEndpoints(Mock);
  RelatedProductsEndpoints(Mock);
  Mock.onAny().passThrough();
};