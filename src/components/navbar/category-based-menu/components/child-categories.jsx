import Box from "@mui/material/Box"; 
// LOCAL CUSTOM COMPONENTS

import { H6 } from "components/Typography";
import Scrollbar from "components/scrollbar"; 
// LOCAL CUSTOM COMPONENT

import CategoryItem from "./category-item"; 
// STYLED COMPONENT

import { SubCategoryList } from "../styles"; 
// DATA TYPES


// ==============================================================
export default function ChildCategories({
  categories
}) {
  return <Scrollbar autoHide={false} sx={{
    width: "100%"
  }}>
      <Box px={6} py={2} height="100%">
        {categories.child.map((item, key) => <div key={key}>
            {
          /* NAV / CATEGORY TITLE */
        }
            <H6 fontWeight={700} my={3}>
              {item.title}
            </H6>

            {
          /* NAV LIST ITEM / CATEGORY LIST ITEM */
        }
            <SubCategoryList>
              {item.child.map((sub, key) => <CategoryItem item={sub} key={key} />)}
            </SubCategoryList>
          </div>)}
      </Box>
    </Scrollbar>;
}