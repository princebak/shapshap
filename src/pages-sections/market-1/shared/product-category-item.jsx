import { styled } from "@mui/material/styles"; 
// GLOBAL CUSTOM COMPONENTS

import { H4 } from "components/Typography";
import BazaarCard from "components/BazaarCard";
import BazaarImage from "components/BazaarImage"; 
// STYLED COMPONENT

const StyledBazaarCard = styled(BazaarCard)(({
  theme
}) => ({
  gap: "1rem",
  display: "flex",
  borderRadius: 5,
  cursor: "pointer",
  alignItems: "center",
  padding: "0.75rem 1rem",
  "&:hover": {
    boxShadow: theme.shadows[2]
  }
})); 
// ==============================================================================


// ==============================================================================
export default function ProductCategoryItem({
  title,
  imgUrl,
  isSelected,
  sx = {},
  ...others
}) {
  return <StyledBazaarCard elevation={isSelected ? 2 : 0} sx={{
    bgcolor: isSelected ? "white" : "grey.100",
    ...sx
  }} {...others}>
      {imgUrl && <BazaarImage alt="" width={30} src={imgUrl} />}

      <H4 lineHeight="1" textTransform="capitalize" ellipsis>
        {title}
      </H4>
    </StyledBazaarCard>;
}