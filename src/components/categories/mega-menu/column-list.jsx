import Link from "next/link"; 
// MUI

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { NavLink } from "components/nav-link"; 
// STYLED COMPONENTS

import { StyledRoot } from "./styles"; 
// DATA TYPES


// ==============================================================
export default function ColumnList({
  list,
  children,
  banner,
  minWidth = 760
}) {
  return <StyledRoot elevation={2} sx={{
    minWidth
  }}>
      <FlexBox px={2.5}>
        <Box flex="1 1 0">
          <Grid container spacing={4}>
            {list.map((item, ind) => <Grid item md={3} key={ind}>
                <div className="title-link">{item.title}</div>

                {item.children?.map((sub, ind) => <NavLink className="child-link" href={sub.href} key={ind}>
                    {sub.title}
                  </NavLink>)}
              </Grid>)}
          </Grid>
        </Box>

        {banner?.position === "right" ? <Box mt={1.5}>
            <Link href={banner.href}>
              <LazyImage src={banner.url} width={137} height={318} alt="banner" />
            </Link>
          </Box> : null}
      </FlexBox>

      {children}
    </StyledRoot>;
}