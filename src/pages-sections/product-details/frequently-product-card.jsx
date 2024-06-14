import Link from "next/link";
import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENTS

import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import BazaarCard from "components/BazaarCard";
import { H6, Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// =======================================================


// =======================================================
export default function FrequentlyProductCard(props) {
  const {
    imgUrl = "/assets/images/products/Rectangle 116.png",
    price,
    title,
    slug
  } = props;
  return <BazaarCard sx={{
    p: 2,
    width: "100%",
    flex: "1 1 0",
    minWidth: "160px",
    margin: {
      xs: 0,
      sm: 1
    },
    maxWidth: {
      xs: "100%",
      sm: "220px"
    }
  }}>
      <Link href={`/products/${slug}`}>
        <HoverBox mb={1.5} borderRadius="8px">
          <LazyImage alt={title} width={500} height={500} src={imgUrl} />
        </HoverBox>

        <Span title={title} mb={0.5} color="inherit" ellipsis display="block">
          {title}
        </Span>

        <FlexBox alignItems="center" gap={1}>
          <H6 color="primary.main">{currency(price)}</H6>

          <Box component="del" fontWeight={600} color="grey.600">
            {calculateDiscount(price, 35)}
          </Box>
        </FlexBox>
      </Link>
    </BazaarCard>;
}