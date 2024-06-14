import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM HOOK

import Verify from "icons/Verify"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import { H1, H3, H5 } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// STYLED COMPONENTS
const Wrapper = styled(Card)({
  display: "flex",
  padding: "3rem 2rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});
const PackageHeading = styled(H1)(({
  theme
}) => ({
  ":after": {
    fontSize: 16,
    fontWeight: 600,
    content: "'/month'",
    verticalAlign: "baseline",
    color: theme.palette.grey[600]
  }
})); 
// ===================================================


// ===================================================
export default function SellerPackageCard({
  listItem
}) {
  const {
    packageName,
    price,
    Icon,
    features = []
  } = listItem || {};
  return <Wrapper>
      <Icon sx={{
      fontSize: 100
    }} />

      <H3 mt={3} fontWeight={600}>
        {packageName} Package
      </H3>

      <PackageHeading fontSize={60}>{currency(price, 0)}</PackageHeading>

      <Box mt={1} mb={2}>
        {features.map((item, index) => <FlexBox gap={2} my={2} alignItems="center" key={index}>
            <Verify />
            <H5>{item}</H5>
          </FlexBox>)}
      </Box>

      <FlexBox alignItems="center" gap={2} width={200}>
        <Button fullWidth color="secondary" variant="outlined">
          Edit
        </Button>

        <Button fullWidth color="error" variant="outlined">
          Delete
        </Button>
      </FlexBox>
    </Wrapper>;
}