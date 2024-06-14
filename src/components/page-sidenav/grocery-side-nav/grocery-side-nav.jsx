
// GLOBAL CUSTOM COMPONENTS
import Scrollbar from "components/scrollbar";
import { NavLink } from "components/nav-link"; 
// LOCAL CUSTOM COMPONENTS

import ListItem from "./components/list-item";
import NavAccordion from "./components/nav-accordion"; 
// STYLED COMPONENTS

import { StyledCard } from "./styles"; 
// CUSTOM DATA MODEL


// ===========================================================
export default function GrocerySideNav({
  navigation
}) {
  return <Scrollbar>
      <StyledCard elevation={3}>
        {navigation.map((item, ind) => {
        if (item.child) return <NavAccordion item={item} key={ind} />;
        return <NavLink key={ind} href={item.href} color="grey.700">
              <ListItem title={item.title} icon={item.icon} />
            </NavLink>;
      })}
      </StyledCard>
    </Scrollbar>;
}