import Link from "next/link";
import Button from "@mui/material/Button"; 
// GLOBAL CUSTOM COMPONENTS

import { H1, H4, Paragraph, Span } from "components/Typography"; 
// STYLED COMPONENT

import { CardWrapper } from "./styles"; 
// ===============================================================


// ===============================================================
export default function CarouselCard4({
  title,
  bgImage,
  category,
  discount,
  buttonLink,
  buttonText,
  description,
  mode = "dark"
}) {
  return <CardWrapper img={bgImage} mode={mode}>
      <div className="content">
        <H4 mb={1} lineHeight={1} fontWeight={400} textTransform="uppercase" fontSize={{
        sm: 30,
        xs: 24
      }}>
          {title}
        </H4>

        <H1 fontSize={{
        sm: 60,
        xs: 44
      }} lineHeight={1} textTransform="uppercase">
          {category}
        </H1>

        <H4 fontSize={{
        sm: 30,
        xs: 24
      }} lineHeight={1} mt={1.5} textTransform="uppercase">
          SALE UP TO <Span color="primary.main">{discount}% OFF</Span>
        </H4>

        <Paragraph fontSize={{
        sm: 18,
        xs: 14
      }} mb={4}>
          {description}
        </Paragraph>

        <Button size="large" color="dark" href={buttonLink} variant="contained" LinkComponent={Link}>
          {buttonText}
        </Button>
      </div>
    </CardWrapper>;
}