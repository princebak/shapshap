import Image from "next/image";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles"; 
// GLOBAL CUSTOM COMPONENT

import { H6, Paragraph } from "components/Typography"; 
// STYLED COMPONENTS

const StyledCard = styled(Box)(({
  theme
}) => ({
  textAlign: "center",
  transition: "all 0.3s",
  "&:hover": {
    "& h6": {
      color: theme.palette.primary.main
    }
  }
}));
const ImgBox = styled("div")(({
  theme
}) => ({
  height: "100%",
  padding: "0 40px 20px 40px",
  background: theme.palette.primary[100]
})); 
// ===================================================


// ===================================================
export default function CategoryCard({
  sx,
  imgUrl,
  title,
  available
}) {
  return <StyledCard sx={sx}>
      <ImgBox>
        <Image alt={title} width={800} height={200} src={imgUrl} style={{
        width: "100%",
        objectFit: "contain"
      }} />
      </ImgBox>

      <H6 fontSize={15} mt="8px" mb="2px">
        {title}
      </H6>
      <Paragraph color="grey.600">{available}</Paragraph>
    </StyledCard>;
}