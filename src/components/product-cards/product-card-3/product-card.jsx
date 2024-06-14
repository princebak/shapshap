"use client";

import Link from "next/link"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products-view/product-view-dialog"; 
// LOCAL CUSTOM HOOKS

import useProduct from "../use-product"; 
// LOCAL CUSTOM COMPONENTS

import DiscountChip from "../discount-chip";
import ProductPrice from "../product-price";
import ProductTitle from "../product-title";
import ProductRating from "../product-rating";
import HoverActions from "./components/hover-actions"; 
// STYLED COMPONENTS

import { ContentWrapper, ImageBox, ImageWrapper, StyledBazaarCard } from "./styles"; 
// ====================================================================


// ====================================================================
export default function ProductCard10(props) {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    slug
  } = props;
  const {
    handleCartAmountChange,
    cartItem,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite
  } = useProduct(slug);

  const handleAddToCart = () => {
    const product = {
      price,
      imgUrl,
      id,
      name: title,
      qty: 1,
      slug
    };
    handleCartAmountChange(product);
  };

  const handleRemoveFormCart = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: cartItem.qty - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <StyledBazaarCard>
      <ImageWrapper>
        {
        /* DISCOUNT PERCENT CHIP IF AVAILABLE */
      }
        <DiscountChip discount={off} />

        {
        /* PRODUCT IMAGE / THUMBNAIL */
      }
        <ImageBox className="hoverImgBox">
          <Link href={`/products/${slug}`}>
            <LazyImage alt={title} width={190} height={190} src={imgUrl} />
          </Link>
        </ImageBox>

        {
        /* PRODUCT VIEW DIALOG BOX */
      }
        <ProductViewDialog openDialog={openModal} handleCloseDialog={toggleDialog} product={{
        title,
        price,
        id,
        slug,
        imgGroup: [imgUrl, imgUrl]
      }} />

        {
        /* PRODUCT HOVER ACTION ICONS */
      }
        <HoverActions isFavorite={isFavorite} toggleDialog={toggleDialog} toggleFavorite={toggleFavorite} handleAddToCart={handleAddToCart} hasQty={cartItem?.qty ? true : false} handleRemoveFormCart={handleRemoveFormCart} />
      </ImageWrapper>

      <ContentWrapper>
        {
        /* PRODUCT NAME / TITLE */
      }
        <ProductTitle title={title} slug={slug} />

        {
        /* PRODUCT RATING / REVIEW  */
      }
        <ProductRating showRating={!hideRating} rating={rating} />

        {
        /* PRODUCT PRICE WITH DISCOUNT */
      }
        <ProductPrice discount={off} price={price} />
      </ContentWrapper>
    </StyledBazaarCard>;
}