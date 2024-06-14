import Link from "next/link"; 
// LOCAL CUSTOM COMPONENTS

import DiscountChip from "../discount-chip"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// STYLED COMPONENTS

import { CardRoot, PriceText } from "./styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductCard13({
  product
}) {
  const {
    title,
    thumbnail,
    price,
    discount,
    slug
  } = product || {};
  return <CardRoot elevation={0}>
      <Link href={`/products/${slug}`}>
        {
        /* SALE CHIP */
      }
        <DiscountChip discount={discount} sx={{
        top: 15,
        left: 15
      }} />

        {
        /* PRODUCT IMAGE */
      }
        <LazyImage alt={title} width={380} height={379} src={thumbnail} />

        <div className="content">
          <Paragraph fontWeight={600} color="grey.600">
            Supplies
          </Paragraph>

          <H3 fontSize={18}>{title}</H3>

          <PriceText>
            {calculateDiscount(price, discount)}
            {discount ? <span>{currency(price)}</span> : null}
          </PriceText>
        </div>
      </Link>
    </CardRoot>;
}