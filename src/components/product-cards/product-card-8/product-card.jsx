"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating"; 
// MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"; 
// LOCAL CUSTOM HOOK

import useProduct from "../use-product"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph, Small } from "components/Typography";
import ProductViewDialog from "components/products-view/product-view-dialog"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM COMPONENTS

import { AddToCartButton, Card, CardMedia, FavoriteButton, QuickViewButton } from "./styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductCard8({
  product
}) {
  const {
    slug,
    id,
    title,
    price,
    thumbnail,
    images,
    categories,
    reviews
  } = product || {};
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite
  } = useProduct(slug); 
// HANDLE ADD TO CART PRODUCT

  const handleAddToCart = () => {
    const payload = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(payload);
  };

  return <Card>
      <CardMedia>
        <Link href={`/products/${slug}`}>
          <LazyImage width={300} height={300} alt="category" className="product-img" src={thumbnail} />
        </Link>

        {
        /* ADD TO CART BUTTON */
      }
        <AddToCartButton className="product-actions" onClick={handleAddToCart}>
          <AddShoppingCart className="icon" fontSize="small" />
        </AddToCartButton>

        {
        /* PRODUCT FAVORITE BUTTON */
      }
        <FavoriteButton className="product-actions" onClick={toggleFavorite}>
          {isFavorite ? <Favorite className="icon" fontSize="small" color="primary" /> : <FavoriteBorder className="icon" fontSize="small" />}
        </FavoriteButton>

        {
        /* PRODUCT QUICK VIEW BUTTON */
      }
        <Box mx={1} position="relative">
          <QuickViewButton fullWidth size="large" color="dark" variant="contained" className="product-view-action" onClick={toggleDialog}>
            Quick View
          </QuickViewButton>
        </Box>
      </CardMedia>

      {
      /* PRODUCT VIEW DIALOG BOX */
    }
      <ProductViewDialog openDialog={openModal} handleCloseDialog={toggleDialog} product={{
      id,
      slug,
      title,
      price,
      imgGroup: images
    }} />

      <Box p={1} textAlign="center">
        {
        /* PRODUCT CATEGORY */
      }
        {categories.length > 0 ? <Small color="grey.500">{categories[0]}</Small> : null}

        {
        /* PRODUCT TITLE / NAME */
      }
        <Paragraph fontWeight="bold">{title}</Paragraph>

        {
        /* PRODUCT PRICE  */
      }
        <H4 fontWeight={700} py={0.5}>
          {currency(price)}
        </H4>

        {
        /* PRODUCT RATING / REVIEW  */
      }
        <FlexRowCenter gap={1}>
          <Rating name="read-only" value={4} readOnly sx={{
          fontSize: 16
        }} />
          <Small fontWeight={600} color="grey.500">
            ({reviews.length} Reviews)
          </Small>
        </FlexRowCenter>
      </Box>
    </Card>;
}