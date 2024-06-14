
// GLOBAL CUSTOM COMPONENTS
import { H4 } from "components/Typography";
import Scrollbar from "components/scrollbar";
import { NavLink } from "components/nav-link";
import FlexBox from "components/flex-box/flex-box"; 
// LOCAL CUSTOM COMPONENT

import ListItem from "./components/list-item";
import NavAccordion from "./components/nav-accordion"; 
// STYLED COMPONENT

import { NavbarRoot } from "./styles"; 
// CUSTOM DATA MODEL


// =================================================================
export default function HealthBeautySideNav({
  navigation
}) {
  return <Scrollbar>
      <NavbarRoot elevation={0}>
        <FlexBox padding="10px 18px" borderRadius="0 0 8px 8px" bgcolor="primary.200" mb={1}>
          <H4>Categories</H4>
        </FlexBox>

        {navigation.map((item, ind) => {
        if (item.child) return <NavAccordion item={item} key={ind} />;
        return <NavLink key={ind} href={item.href} color="grey.700">
              <ListItem title={item.title} icon={item.icon} />
            </NavLink>;
      })}
      </NavbarRoot>
    </Scrollbar>;
}