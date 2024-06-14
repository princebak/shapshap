import Link from "next/link";
import LazyImage from "components/LazyImage"; 
// STYLED COMPONENT

import { StyledButton, StyledRoot } from "./styles"; 
// ==============================================================


// ==============================================================
export default function StoryContent({
  image,
  url
}) {
  return <StyledRoot>
      <LazyImage src={image} width={450} height={824} alt="Story" />

      <StyledButton color="primary" variant="contained" LinkComponent={Link} href={url}>
        View More
      </StyledButton>
    </StyledRoot>;
}