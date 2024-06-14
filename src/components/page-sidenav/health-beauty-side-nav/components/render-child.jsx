import { Span } from "components/Typography";
import { NavLink } from "components/nav-link"; 
// STYLED COMPONENTS

import { Circle, DotListItem } from "../styles"; 
// ==============================================================


// ==============================================================

// RENDER THE NESTED CHILD
export const renderChild = childList => {
  return childList.map(item => <NavLink href={item.href} key={item.title} color="grey.700">
      <DotListItem>
        <Circle className="dot" />
        <Span lineHeight={1}>{item.title}</Span>
      </DotListItem>
    </NavLink>);
};