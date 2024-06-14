
// LOCAL CUSTOM COMPONENTS
import MegaMenu1 from "../mega-menu/mega-menu-1";
import MegaMenu2 from "../mega-menu/mega-menu-2";
import CategoryListItem from "../category-list-item"; 
// NAVIGATION DATA

import { categoryMenus } from "data/navigations"; 
// STYLED COMPONENT

import { StyledRoot } from "./styles"; 
// PROPS TYPE

export default function CategoryList({
  open,
  position = "absolute"
}) {
  return <StyledRoot open={open} position={position}>
      {categoryMenus.map(item => {
      const {
        href,
        title,
        children,
        component,
        icon,
        offer
      } = item;
      const MegaMenu = component === MegaMenu1.name ? MegaMenu1 : MegaMenu2;
      return <CategoryListItem key={title} href={href} icon={icon} title={title} caret={!!children} render={component ? <MegaMenu data={children} banner={offer} /> : null} />;
    })}
    </StyledRoot>;
}