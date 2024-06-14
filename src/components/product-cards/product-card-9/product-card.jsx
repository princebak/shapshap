import Link from "next/link";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import LazyImage from "components/LazyImage"; 
// LOCAL CUSTOM HOOK

import useProduct from "../use-product"; 
// LOCAL CUSTOM COMPONENTS

import DiscountChip from "../discount-chip";
import ProductPrice from "../product-price";
import ProductTags from "./components/tags";
import AddToCartButton from "./components/add-to-cart";
import FavoriteButton from "./components/favorite-button"; 
// STYLED COMPONENT

const Wrapper = styled(Card)({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  marginBottom: "1.25rem"
});
const ContentWrapper = styled("div")(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  "& .img-wrapper": {
    width: 150,
    flexShrink: 0,
    position: "relative",
    backgroundColor: theme.palette.grey[200]
  },
  "& .content": {
    flex: 1,
    padding: "1rem",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    "& .img-wrapper": {
      width: "100%"
    },
    "& .content": {
      width: "100%"
    }
  }
})); 
// ===========================================================


// ===========================================================
export default function ProductCard9(props) {
  const {
    imgUrl,
    title,
    price,
    off,
    rating,
    id,
    slug
  } = props || {};
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
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

  return <Wrapper>
      {
      /* PRODUCT FAVORITE BUTTON */
    }
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />

      <ContentWrapper>
        <div className="img-wrapper">
          {
          /* DISCOUNT PERCENT CHIP IF AVAILABLE */
        }
          <DiscountChip discount={off} />

          {
          /* PRODUCT IMAGE / THUMBNAIL */
        }
          <LazyImage src={imgUrl} alt={title} width={500} height={500} />
        </div>

        <div className="content">
          <div>
            {
            /* PRODUCT TAG LIST */
          }
            <ProductTags tags={["Bike", "Motor", "Ducati"]} />

            {
            /* PRODUCT TITLE / NAME */
          }
            <Link href={`/products/${slug}`}>
              <H5 fontWeight="700" mt={1} mb={2}>
                {title}
              </H5>
            </Link>

            {
            /* PRODUCT RATING / REVIEW  */
          }
            <Rating size="small" value={rating} color="warn" readOnly />

            {
            /* PRODUCT PRICE */
          }
            <ProductPrice price={price} discount={off} />
          </div>

          {
          /* PRODUCT ADD TO CART BUTTON */
        }
          <AddToCartButton quantity={cartItem?.qty} handleDecrement={handleDecrementQuantity} handleIncrement={handleIncrementQuantity} />
        </div>
      </ContentWrapper>
    </Wrapper>;
}