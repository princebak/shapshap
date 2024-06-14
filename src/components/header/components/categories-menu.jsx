import Button from "@mui/material/Button"; 
// MUI ICON COMPONENT

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; 
// CUSTOM ICON COMPONENTS

import Category from "icons/Category"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import CategoryMenu from "components/categories/category-menu";
export default function CategoriesMenu() {
  return <CategoryMenu render={handler => <FlexBox color="grey.600" alignItems="center" ml={2}>
          <Button color="inherit" onClick={e => handler(e)}>
            <Category fontSize="small" color="inherit" />
            <KeyboardArrowDown fontSize="small" color="inherit" />
          </Button>
        </FlexBox>} />;
}