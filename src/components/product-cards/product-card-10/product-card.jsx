"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating"; 
// MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; 
// LOCAL CUSTOM HOOK

import useProduct from "../use-product"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph, Small } from "components/Typography";
import ProductViewDialog from "components/products-view/product-view-dialog"; 
// STYLED COMPONENTS

import { StyledIconButton, Card, CardMedia, FavoriteButton } from "./styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductCard10({
  product
}) {
  const {
    slug,
    id,
    price,
    rating,
    thumbnail,
    title,
    reviews
  } = product;
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite
  } = useProduct(slug);

  const handleAddToCart = () => {
    const payload = {
      id: id,
      slug: slug,
      name: title,
      price: price,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(payload);
  };

  return <Card>
      <CardMedia>
        {
        /* PRODUCT IMAGE / THUMBNAIL */
      }
        <Link href={`/products/${slug}`}>
          <LazyImage width={300} height={300} alt="category" src={thumbnail} className="product-img" />
        </Link>

        {
        /* PRODUCT VIEW BUTTON */
      }
        <StyledIconButton className="product-actions" onClick={toggleDialog}>
          <RemoveRedEye color="disabled" fontSize="small" />
        </StyledIconButton>

        {
        /* PRODUCT FAVORITE BUTTON */
      }
        <FavoriteButton className="product-actions" onClick={toggleFavorite}>
          {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder color="disabled" fontSize="small" />}
        </FavoriteButton>
      </CardMedia>

      {
      /* PRODUCT VIEW BOX */
    }
      <ProductViewDialog openDialog={openModal} handleCloseDialog={toggleDialog} product={{
      id,
      slug,
      title,
      price,
      imgGroup: [thumbnail, thumbnail]
    }} />

      <Box p={2} textAlign="center">
        {
        /* PRODUCT TITLE */
      }
        <Paragraph>{title}</Paragraph>

        {
        /* PRODUCT PRICE */
      }
        <H4 fontWeight={700} py={0.5}>
          {currency(price)}
        </H4>

        {
        /* PRODUCT RATINGS */
      }
        <FlexRowCenter gap={1} mb={2}>
          <Rating name="read-only" value={rating || 4} readOnly sx={{
          fontSize: 14
        }} />
          <Small fontWeight={600} color="grey.500">
            ({reviews.length})
          </Small>
        </FlexRowCenter>

        {
        /* PRODUCT ADD TO CART BUTTON */
      }
        <Button fullWidth color="dark" variant="outlined" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Box>
    </Card>;
}