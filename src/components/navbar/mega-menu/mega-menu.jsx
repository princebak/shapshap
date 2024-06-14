import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; 
// GLOBAL CUSTOM COMPONENTS

import FlexRowCenter from "components/flex-box/flex-row-center"; 
// GLOBAL CUSTOM HOOKS

import useOverflowDetect from "hooks/useOverflowDetect"; 
// LOCAL CUSTOM COMPONENT

import CategoryList from "./category-list"; 
// STYLED COMPONENTS

import { MenusContainer, Wrapper } from "./styles"; 
// DATA TYPES


// ===============================================================
const gridSize = length => {
  if (length === 1) return 12;
  if (length === 2) return 6;
  if (length === 3) return 4;
  if (length === 4) return 3;
  return 3;
};

export default function MegaMenu({
  title,
  menuList
}) {
  
// get grid size the basis of menu list
  const grid = gridSize(menuList.length);
  const STYLE = {
    py: 2,
    ":nth-of-type(odd)": {
      backgroundColor: "grey.100"
    }
  };
  const {
    elementRef,
    isLeftOverflowing,
    isRightOverflowing,
    checkOverflow
  } = useOverflowDetect();
  return <Wrapper onMouseOver={checkOverflow}>
      <FlexRowCenter fontWeight={600} alignItems="flex-end" gap={0.3}>
        {title}
        <KeyboardArrowDown className="icon" />
      </FlexRowCenter>

      <MenusContainer ref={elementRef} className="menu-list" left={isLeftOverflowing} right={isRightOverflowing}>
        <Card className="card" elevation={3} sx={{
        mt: 1.5,
        overflow: "hidden"
      }}>
          <Grid container>
            {menuList.slice(0, 4).map((category, key) => <Grid item md={grid} key={key} sx={STYLE}>
                {category.map((item, i) => <CategoryList category={item} key={item.title + i} />)}
              </Grid>)}
          </Grid>
        </Card>
      </MenusContainer>
    </Wrapper>;
}