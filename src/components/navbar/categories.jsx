import ChevronRight from "@mui/icons-material/ChevronRight"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/category-menu"; 
// CUSTOM ICON COMPONENT

import Category from "icons/Category"; 
// STYLED COMPONENT

import { CategoryMenuButton } from "./styles";
export default function Categories() {
  return <CategoryMenu render={handler => <CategoryMenuButton variant="text" onClick={e => handler(e)}>
          <div className="prefix">
            <Category fontSize="small" />
            <Paragraph fontWeight={600}>Categories</Paragraph>
          </div>

          <ChevronRight className="dropdown-icon" fontSize="small" />
        </CategoryMenuButton>} />;
}