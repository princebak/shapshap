import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/scrollbar";
import { H5 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box"; 
// LOCAL CUSTOM COMPONENTS

import ListItem from "./components/list-item";
import Accordion from "./components/nav-accordion"; 
// STYLED COMPONENTS

import { BorderBox, ColorBorder, NavbarRoot } from "./styles"; 
// CUSTOM DATA MODEL


// ==================================================================
export default function SideNavbar({
  navList,
  lineStyle = "solid",
  sidebarHeight = "auto",
  sidebarStyle = "transparent",
  handleSelect = () => {}
}) {
  return <Scrollbar autoHide={false} sx={{
    maxHeight: sidebarHeight
  }}>
      <NavbarRoot sidebar={sidebarStyle}>
        {navList.map((nav, ind) => <div key={ind}>
            {
          /* GROUP TITLE */
        }
            <Box padding="16px 20px 5px 20px">
              <H5>{nav.category}</H5>

              <BorderBox line={lineStyle}>
                <ColorBorder />
                <ColorBorder grey={1} />
              </BorderBox>
            </Box>

            {
          /* CATEGORY/NAV LIST */
        }
            {nav.categoryItem.map((item, ind) => {
          if (item.child) {
            return <Accordion item={item} handleSelect={handleSelect} key={ind} />;
          }

          return <FlexBox gap={1.5} py={0.75} key={item.title} className="linkList" onClick={() => handleSelect(item.title)}>
                  <ListItem title={item.title} icon={item.icon} />
                </FlexBox>;
        })}
          </div>)}
      </NavbarRoot>
    </Scrollbar>;
}