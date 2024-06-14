import Link from "next/link";
import Rating from "@mui/material/Rating"; 
// GLOBAL CUSTOM COMPONENTS

import { H6 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// STYLED COMPONENTS

import { PriceText } from "./styles"; 
// CUSTOM DATA MODEL

import DiscountChip from "../discount-chip";
import QuantityButtons from "./components/quantity-buttons"; 
// LOCAL CUSTOM HOOKS

import useProduct from "../use-product"; 
// ==============================================================


// ==============================================================
export default function ProductCard16({
  product
}) {
  const {
    slug,
    title,
    thumbnail,
    price,
    discount,
    rating,
    id
  } = product || {};
  const {
    cartItem,
    handleCartAmountChange
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(product);
  };

  const handleDecrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <div>
      <Link href={`/products/${slug}`}>
        <FlexBox position="relative" bgcolor="grey.50" borderRadius={3} mb={2}>
          <LazyImage alt={title} width={380} height={379} src={thumbnail} />
          {discount ? <DiscountChip discount={discount} sx={{
          left: 20,
          top: 20
        }} /> : null}
        </FlexBox>
      </Link>

      <FlexBetween alignItems="flex-end">
        <div>
          <Link href={`/products/${slug}`}>
            <H6 fontWeight={700} mb={1}>
              {title}
            </H6>
          </Link>

          <Rating readOnly value={rating} size="small" precision={0.5} />

          <PriceText>
            {discount ? <span className="base-price">{currency(price)}</span> : null}
            {calculateDiscount(price, discount)}
          </PriceText>
        </div>

        {
        /* PRODUCT QUANTITY HANDLER BUTTONS */
      }
        <QuantityButtons quantity={cartItem?.qty || 0} handleIncrement={handleIncrementQuantity} handleDecrement={handleDecrementQuantity} />
      </FlexBetween>
    </div>;
}