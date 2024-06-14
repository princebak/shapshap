"use client";

import { useEffect, useState } from "react"; 
// LOCAL CUSTOM COMPONENT

import ProductCategoryItem from "../shared/product-category-item"; 
// GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard"; 
// CUSTOM DATA MODELS


// ======================================================
export default function Sidebar({
  brands,
  shops
}) {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState("brands");

  const handleCategoryClick = brand => () => {
    if (selected.match(brand)) setSelected("");else setSelected(brand);
  };

  useEffect(() => {
    if (type === "brands") setList(brands);else setList(shops);
  }, [brands, shops, type]);
  return <BazaarCard sx={{
    width: "100%",
    maxWidth: 250,
    height: "100%",
    padding: "1.25rem",
    borderRadius: "10px",
    display: {
      xs: "none",
      md: "block"
    }
  }}>
      <FlexBox mt={-1} mb={1}>
        <H3 fontSize={20} fontWeight={600} padding="0.5rem 1rem" style={{
        cursor: "pointer"
      }} onClick={() => setType("brands")} color={type === "brands" ? "grey.900" : "grey.600"}>
          Brands
        </H3>

        <H3 fontSize={20} lineHeight="1.3" color="grey.400" fontWeight={600} paddingTop="0.5rem">
          |
        </H3>

        <H3 fontSize={20} fontWeight={600} padding="0.5rem 1rem" style={{
        cursor: "pointer"
      }} onClick={() => setType("shops")} color={type === "shops" ? "grey.900" : "grey.600"}>
          Shops
        </H3>
      </FlexBox>

      {list.map(item => <ProductCategoryItem key={item.id} title={item.name} isSelected={!!selected.match(item.slug)} onClick={handleCategoryClick(item.slug)} imgUrl={type === "shops" ? `/assets/images/shops/${item.thumbnail}.png` : item.image} sx={{
      mb: "0.75rem",
      bgcolor: selected.match(item.slug) ? "white" : "grey.100"
    }} />)}

      <ProductCategoryItem title={`View All ${type}`} sx={{
      mt: 8,
      bgcolor: "grey.100",
      justifyContent: "center"
    }} />
    </BazaarCard>;
}