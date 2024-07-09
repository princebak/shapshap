import { useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { changeCartAmount } from "redux/slices/cartSlice";

export default function useProduct(slug) {

  const { currentCart } = useSelector((state) => state.cart);
  const cartItem = currentCart.find((item) => item.slug === slug);

  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = useCallback(() => setIsFavorite((fav) => !fav), []);
  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  const dispatch = useDispatch();

  const handleCartAmountChange = (product, type) => {
    dispatch(changeCartAmount(product));
    // SHOW ALERT PRODUCT ADDED OR REMOVE

    if (type === "remove")
      enqueueSnackbar("Remove from Cart", {
        variant: "error",
      });
    else
      enqueueSnackbar("Added to Cart", {
        variant: "success",
      });
  };

  return {
    cartItem,
    openModal,
    isFavorite,
    toggleDialog,
    toggleFavorite,
    handleCartAmountChange,
  };
}
