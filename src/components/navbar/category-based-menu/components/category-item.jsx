import Link from "next/link";
import Avatar from "@mui/material/Avatar"; 
// STYLED COMPONENT

import { SubCategoryListItem } from "../styles"; 
// DATA TYPES


// ==============================================================
export default function CategoryItem({
  item
}) {
  const {
    title,
    url = "/",
    Icon,
    img
  } = item || {};
  return <Link href={url}>
      <SubCategoryListItem>
        {img ? <Avatar alt={title} src={img} sx={{
        backgroundColor: "grey.100",
        borderRadius: 1
      }} /> : null}

        {Icon ? <Icon sx={{
        fontSize: 16
      }} /> : null}
        {title}
      </SubCategoryListItem>
    </Link>;
}