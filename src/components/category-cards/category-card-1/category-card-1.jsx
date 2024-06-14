
// GLOBAL CUSTOM COMPONENTS
import { H4 } from "components/Typography";
import LazyImage from "components/LazyImage"; 
// STYLED COMPONENTS

import { CategoryTitle, Wrapper } from "./styles"; 
// ============================================================


// ============================================================
export default function CategoryCard1({
  image,
  title
}) {
  return <Wrapper>
      <LazyImage src={image} width={213} height={213} alt="category" />

      <CategoryTitle className="category-title">
        <H4>{title}</H4>
      </CategoryTitle>
    </Wrapper>;
}