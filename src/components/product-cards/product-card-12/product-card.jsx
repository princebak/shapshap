import Link from "next/link";
import Rating from "@mui/material/Rating"; 
// GLOBAL CUSTOM COMPONENTS

import { H6 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// STYLED COMPONENTS

import { PriceText } from "./styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductCard12({
  product
}) {
  const {
    slug,
    title,
    thumbnail,
    price,
    discount,
    rating
  } = product || {};
  return <Link href={`/products/${slug}`}>
      <FlexBox bgcolor="grey.50" borderRadius={3} mb={2}>
        <LazyImage alt={title} width={380} height={379} src={thumbnail} />
      </FlexBox>

      <div>
        <Rating readOnly value={rating} size="small" precision={0.5} />
        <H6 fontSize={17} fontWeight={700}>
          {title}
        </H6>

        <PriceText>
          {discount ? <span className="base-price">{currency(price)}</span> : null}
          {calculateDiscount(price, discount)}
        </PriceText>
      </div>
    </Link>;
}