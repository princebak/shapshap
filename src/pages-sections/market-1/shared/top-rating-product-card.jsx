import Rating from "@mui/material/Rating"; 
// GLOBAL CUSTOM COMPONENTS

import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4, Small } from "components/Typography";
import { FlexRowCenter } from "components/flex-box"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// ======================================================


// ======================================================
export default function TopRatingProductCard(props) {
  const {
    title,
    price,
    imgUrl,
    rating = 5,
    reviewCount = 10
  } = props;
  return <div>
      <HoverBox mb={2} mx="auto" borderRadius={2}>
        <LazyImage alt={title} width={380} height={380} src={imgUrl} style={{
        objectFit: "contain",
        objectPosition: "center center"
      }} />
      </HoverBox>

      <FlexRowCenter mb={0.5} gap={0.5}>
        <Rating size="small" value={rating} color="warn" readOnly sx={{
        fontSize: 12
      }} />
        <Small fontWeight={600}>({reviewCount})</Small>
      </FlexRowCenter>

      <H4 fontSize={14} textAlign="center" mb={0.5} title={title} ellipsis>
        {title}
      </H4>

      <H4 fontSize={14} textAlign="center" color="primary.main">
        {currency(price)}
      </H4>
    </div>;
}