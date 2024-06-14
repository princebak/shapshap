"use client";

import Link from "next/link";
import { useState } from "react";
import Rating from "@mui/material/Rating"; 
// LOCAL CUSTOM COMPONENTS

import ProductPrice from "./components/product-price";
import FavoriteButton from "./components/favorite-button"; 
// GLOBAL CUSTOM COMPONENTS

import HoverBox from "components/HoverBox";
import { H6 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { FlexBetween } from "components/flex-box"; 
// ========================================================


// ========================================================
export default function ProductCard2({
  slug,
  title,
  price,
  imgUrl,
  rating,
  off = 20,
  hideReview,
  hideFavoriteIcon
}) {
  const [favorite, setFavorite] = useState(false);
  return <div>
      <Link href={`/products/${slug}`}>
        <HoverBox overflow="hidden" borderRadius={2}>
          <LazyImage width={270} height={270} alt={title} src={imgUrl} />
        </HoverBox>
      </Link>

      <FlexBetween mt={2}>
        <div>
          <H6 mb={0.5} title={title} ellipsis>
            {title}
          </H6>

          {!hideReview ? <Rating size="small" value={rating} color="warn" readOnly /> : null}

          <ProductPrice price={price} off={off} />
        </div>

        {!hideFavoriteIcon ? <FavoriteButton isFavorite={favorite} handleClick={() => setFavorite(state => !state)} /> : null}
      </FlexBetween>
    </div>;
}