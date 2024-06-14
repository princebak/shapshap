import Link from "next/link";
import Box from "@mui/material/Box"; 
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
import QuantityButtons from "../product-card-1/components/quantity-buttons"; 
// STYLED COMPONENTS

import { ContentWrapper, ImageWrapper, StyledBazaarCard } from "./styles"; 
// ===============================================================


// ===============================================================
export default function ProductCard4(props) {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    hoverEffect,
    slug
  } = props;
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(product);
  };

  const handleDecrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {
        /* DISCOUNT PERCENT CHIP IF AVAILABLE */
      }
        <DiscountChip discount={off} />

        {
        /* PRODUCT IMAGE / THUMBNAIL */
      }
        <Link href={`/products/${slug}`}>
          <LazyImage alt={title} src={imgUrl} width={450} height={450} />
        </Link>

        {
        /* HOVER ACTION ICONS */
      }
        <HoverActions isFavorite={isFavorite} toggleView={toggleDialog} toggleFavorite={toggleFavorite} handleIncrementQuantity={handleIncrementQuantity} />
      </ImageWrapper>

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

      <ContentWrapper>
        <Box flex="1 1 0" pt="3px">
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
        </Box>

        {
        /* PRODUCT QUANTITY HANDLER BUTTONS */
      }
        <QuantityButtons quantity={cartItem?.qty || 0} handleIncrement={handleIncrementQuantity} handleDecrement={handleDecrementQuantity} />
      </ContentWrapper>
    </StyledBazaarCard>;
}