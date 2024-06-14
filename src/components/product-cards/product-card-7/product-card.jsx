"use client";

import Link from "next/link";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography"; 
// LOCAL CUSTOM HOOK

import useProduct from "../use-product"; 
// LOCAL CUSTOM COMPONENTS

import ProductPrice from "../product-price";
import DiscountChip from "../discount-chip";
import ProductStatus from "./components/product-status";
import ProductRating from "../product-rating";
import QuantityButtons from "./components/quantity-buttons"; 
// STYLED COMPONENTS

import { StyledCard, ContentWrapper, ColorBox, ImgBox } from "./styles"; 
// =======================================================


// =======================================================
export default function ProductCard7(props) {
  const {
    sx,
    off,
    status,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    productColors,
    slug
  } = props;
  const {
    cartItem,
    handleCartAmountChange
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

  return <StyledCard sx={sx}>
      <Link href={`/products/${slug}`}>
        <ImgBox>
          {
          /* PRODUCT BADGE STATUS IF STATUS AVAILABLE */
        }
          <ProductStatus status={status} />

          {
          /* DISCOUNT PERCENT CHIP IF AVAILABLE */
        }
          <DiscountChip discount={off} sx={{
          borderRadius: 0
        }} />

          {
          /* PRODUCT IMAGE / THUMBNAIL */
        }
          <div className="img-wrapper">
            <LazyImage alt={title} width={300} height={273} src={imgUrl} />
          </div>
        </ImgBox>
      </Link>

      <ContentWrapper>
        <div className="content">
          {
          /* PRODUCT TITLE / NAME */
        }
          <Link href={`/products/${slug}`}>
            <H3 mb={1} ellipsis title={title} fontSize={24} fontWeight={700} color="text.secondary">
              {title}
            </H3>
          </Link>

          {
          /* PRODUCT RATING / REVIEW  */
        }
          <ProductRating showRating={!hideRating} rating={rating} />

          {
          /* PRODUCT COLORS */
        }
          {productColors.length ? <ColorBox>
              {productColors.map((color, ind) => <Span key={ind} bgcolor={color} />)}
            </ColorBox> : null}

          {
          /* PRODUCT PRICE WITH DISCOUNT */
        }
          <ProductPrice discount={off} price={price} />
        </div>

        {
        /* PRODUCT QUANTITY HANDLER BUTTONS */
      }
        <QuantityButtons quantity={cartItem?.qty || 0} handleIncrement={handleIncrementQuantity} handleDecrement={handleDecrementQuantity} />
      </ContentWrapper>
    </StyledCard>;
}