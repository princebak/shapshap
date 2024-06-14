"use client";

import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage"; 
// STYLED COMPONENT

const StyledChip = styled(Chip)({
  zIndex: 2,
  top: "0.875rem",
  fontSize: "10px",
  padding: "0 8px",
  fontWeight: "600",
  position: "absolute"
}); 
// ========================================================


// ========================================================
export default function TopCategoriesCard({
  title,
  subtitle,
  imgUrl
}) {
  return <Card sx={{
    position: "relative"
  }}>
      <StyledChip size="small" label={title} color="secondary" sx={{
      backgroundColor: "secondary.main",
      left: 12,
      color: "white"
    }} />

      <StyledChip color="default" label={subtitle} size="small" sx={{
      right: 12
    }} />

      <HoverBox borderRadius={2}>
        <LazyImage priority src={imgUrl} width={1035} height={348} alt={title} />
      </HoverBox>
    </Card>;
}