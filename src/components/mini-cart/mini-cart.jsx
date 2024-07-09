import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart";
// LOCAL CUSTOM COMPONENTS

import TopHeader from "./components/top-header";
import MiniCartItem from "./components/cart-item";
import EmptyCartView from "./components/empty-view";
import BottomActions from "./components/bottom-actions";
// GLOBAL CUSTOM COMPONENT

import Scrollbar from "components/scrollbar";
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
import { useDispatch, useSelector } from "react-redux";
import { changeCartAmount } from "redux/slices/cartSlice";
// CUSTOM DATA MODEL

// =========================================================
export default function MiniCart({ toggleSidenav }) {
  const { push } = useRouter();

  const { currentCart: cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCartAmountChange = (amount, product) => () => {
    dispatch(changeCartAmount({ ...product, qty: amount }));
  };

  const getTotalPrice = () => {
    return cartList.reduce(
      (acc, item) =>
        acc + (item.price - (item.discount * item.price) / 100) * item.qty,
      0
    );
  };

  const handleNavigate = (path) => () => {
    toggleSidenav();
    push(path);
  };

  return (
    <Box width="100%" minWidth={380}>
      {/* HEADING SECTION */}
      <TopHeader toggle={toggleSidenav} total={cartList.length} />

      <Divider />

      <Box height={`calc(100vh - ${cartList.length ? "207px" : "75px"})`}>
        {/* CART ITEM LIST */}
        {cartList.length > 0 ? (
          <Scrollbar>
            {cartList.map((item) => (
              <MiniCartItem
                item={item}
                key={item.id}
                handleCartAmountChange={handleCartAmountChange}
              />
            ))}
          </Scrollbar>
        ) : (
          <EmptyCartView />
        )}
      </Box>

      {/* CART BOTTOM ACTION BUTTONS */}
      {cartList.length > 0 ? (
        <BottomActions
          total={currency(getTotalPrice())}
          handleNavigate={handleNavigate}
        />
      ) : null}
    </Box>
  );
}
