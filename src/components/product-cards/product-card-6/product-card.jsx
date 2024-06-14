"use client";

import Link from "next/link"; 
// LOCAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products-view/product-view-dialog"; 
// LOCAL CUSTOM HOOK

import useProduct from "../use-product"; 
// LOCAL CUSTOM COMPONENTS

import HoverActions from "./components/hover-actions";
import ProductTitle from "../product-title";
import ProductPrice from "../product-price";
import DiscountChip from "../discount-chip";
import ProductRating from "../product-rating"; 
// STYLED COMPONENTS

import { ContentWrapper, ImgBox, StyledCard } from "./styles"; 
// CUSTOM DATA MODEL


// ============================================================
export default function ProductCard6(props) {
  const {
    hideRating,
    discount,
    id,
    slug,
    title,
    price,
    thumbnail,
    rating,
    images
  } = props;
  const {
    cartItem,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite,
    handleCartAmountChange
  } = useProduct(slug);

  const handleAddToCart = () => {
    handleCartAmountChange({
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1
    });
  };

  return <StyledCard>
      <ImgBox id="imgBox">
        {
        /* DISCOUNT PERCENT CHIP IF AVAILABLE */
      }
        <DiscountChip discount={discount} shape="square" />

        {
        /* PRODUCT IMAGE / THUMBNAIL */
      }
        <Link href={`/products/${slug}`}>
          <LazyImage alt={title} width={550} height={550} src={thumbnail} style={{
          height: 190,
          objectFit: "contain"
        }} />
        </Link>

        {
        /* HOVER ACTION ICONS */
      }
        <HoverActions isFavorite={isFavorite} toggleView={toggleDialog} toggleFavorite={toggleFavorite} handleAddToCart={handleAddToCart} />
      </ImgBox>

      {
      /* PRODUCT VIEW DIALOG BOX */
    }
      <ProductViewDialog openDialog={openModal} handleCloseDialog={toggleDialog} product={{
      title,
      price,
      id,
      slug,
      imgGroup: images
    }} />

      <ContentWrapper>
        {
        /* PRODUCT PRICE WITH DISCOUNT */
      }
        <ProductPrice discount={discount} price={price} />

        {
        /* PRODUCT NAME / TITLE */
      }
        <ProductTitle slug={slug} title={title} />

        {
        /* PRODUCT RATINGS IF AVAILABLE */
      }
        <ProductRating rating={rating} showRating={!hideRating} />
      </ContentWrapper>
    </StyledCard>;
}