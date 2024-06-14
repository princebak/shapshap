"use client";

import { useState } from "react"; 
// LOCAL CUSTOM COMPONENT

import ProductCategoryItem from "../shared/product-category-item"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard"; 
// CUSTOM DATA MODELS


// ==============================================================
export default function Sidebar({
  brands
}) {
  const [selected, setSelected] = useState("");

  const handleCategoryClick = brand => () => {
    if (selected === brand.slug) setSelected("");else setSelected(brand.slug);
  };

  return <BazaarCard sx={{
    width: "100%",
    maxWidth: 250,
    height: "100%",
    minWidth: "240px",
    padding: "1.25rem",
    borderRadius: "10px",
    display: {
      xs: "none",
      md: "block"
    }
  }}>
      {brands.map(brand => <ProductCategoryItem id={brand.id} key={brand.id} title={brand.name} imgUrl={brand.image} sx={{
      mb: "0.75rem"
    }} onClick={handleCategoryClick(brand)} isSelected={selected === brand.slug} />)}

      <ProductCategoryItem id="all" title="View All Brands" isSelected={selected === "all"} sx={{
      mt: 8,
      height: 44,
      justifyContent: "center"
    }} />
    </BazaarCard>;
}