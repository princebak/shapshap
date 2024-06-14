import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import { FlexBetween, FlexRowCenter } from "components/flex-box"; 
// STYLED COMPONENTS

import { CardRoot, PriceText } from "./styles"; 
// ==============================================================


// ==============================================================
export default function ProductCard11(props) {
  const {
    image,
    description,
    regularPrice,
    sale,
    salePrice,
    title
  } = props || {};
  return <CardRoot elevation={0}>
      {
      /* SALE CHIP */
    }
      {sale ? <FlexRowCenter top={12} left={12} width={50} height={50} borderRadius="50%" position="absolute" bgcolor="error.main">
          <Paragraph color="white">Sale!</Paragraph>
        </FlexRowCenter> : null}

      {
      /* PRODUCT IMAGE */
    }
      <LazyImage width={379} height={340} alt="Apple Watch" src={image} />

      <Box p={2}>
        {
        /* PRODUCT TITLE & REGULAR PRICE */
      }
        <FlexBetween>
          <H3 fontSize={18}>{title}</H3>
          <PriceText>$250.00</PriceText>
        </FlexBetween>

        {
        /* DESCRIPTION & SALE PRICE */
      }
        <FlexBetween mt={0.5}>
          <Paragraph color="grey.600" ellipsis>
            Powerful sensors, advanced
          </Paragraph>
          <H3 fontSize={18}>$110.00</H3>
        </FlexBetween>
      </Box>
    </CardRoot>;
}