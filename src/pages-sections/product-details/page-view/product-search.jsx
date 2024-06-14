"use client";

import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery"; 
// MUI ICON COMPONENTS

import Apps from "@mui/icons-material/Apps";
import ViewList from "@mui/icons-material/ViewList";
import FilterList from "@mui/icons-material/FilterList"; 
// Local CUSTOM COMPONENT

import ProductFilterCard from "../product-filter-card"; 
// GLOBAL CUSTOM COMPONENTS

import Sidenav from "components/side-nav";
import { H5, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import ProductsGridView from "components/products-view/products-grid-view";
import ProductsListView from "components/products-view/products-list-view"; 
// PRODUCT DATA

import productDatabase from "data/product-database"; 
// TYPE

const SORT_OPTIONS = [{
  label: "Relevance",
  value: "relevance"
}, {
  label: "Date",
  value: "date"
}, {
  label: "Price Low to High",
  value: "asc"
}, {
  label: "Price High to Low",
  value: "desc"
}];
const initialFilters = {
  rating: 0,
  color: [],
  brand: [],
  sales: [],
  price: [0, 300]
};
export default function ProductSearchPageView() {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState({ ...initialFilters
  });
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));

  const handleChangeFilters = (key, values) => {
    setFilters(prev => ({ ...prev,
      [key]: values
    }));
  };

  const handleChangeSortBy = useCallback(v => setSortBy(v), []);
  const toggleView = useCallback(v => () => setView(v), []);
  const PRODUCTS = productDatabase.slice(95, 104).map(pro => ({ ...pro,
    discount: 25
  }));
  return <div className="bg-white pt-2 pb-4">
      <Container>
        {
        /* FILTER ACTION AREA */
      }
        <FlexBetween flexWrap="wrap" gap={2} mb={2}>
          <div>
            <H5 lineHeight={1} mb={1}>
              Searching for “ mobile phone ”
            </H5>
            <Paragraph color="grey.600">48 results found</Paragraph>
          </div>

          <FlexBox alignItems="center" columnGap={4} flexWrap="wrap">
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                Sort by:
              </Paragraph>

              <TextField select fullWidth size="small" value={sortBy} variant="outlined" placeholder="Sort by" onChange={e => handleChangeSortBy(e.target.value)} sx={{
              flex: "1 1 0",
              minWidth: "150px"
            }}>
                {SORT_OPTIONS.map(item => <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>)}
              </TextField>
            </FlexBox>

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                View:
              </Paragraph>

              <IconButton onClick={toggleView("grid")}>
                <Apps fontSize="small" color={view === "grid" ? "primary" : "inherit"} />
              </IconButton>

              <IconButton onClick={toggleView("list")}>
                <ViewList fontSize="small" color={view === "list" ? "primary" : "inherit"} />
              </IconButton>

              {
              /* SHOW IN THE SMALL DEVICE */
            }
              {downMd && <Sidenav handler={close => <IconButton onClick={close}>
                      <FilterList fontSize="small" />
                    </IconButton>}>
                  <Box px={3} py={2}>
                    <ProductFilterCard filters={filters} changeFilters={handleChangeFilters} />
                  </Box>
                </Sidenav>}
            </FlexBox>
          </FlexBox>
        </FlexBetween>

        <Grid container spacing={4}>
          {
          /* PRODUCT FILTER SIDEBAR AREA */
        }
          <Grid item xl={2} md={3} sx={{
          display: {
            md: "block",
            xs: "none"
          }
        }}>
            <ProductFilterCard filters={filters} changeFilters={handleChangeFilters} />
          </Grid>

          {
          /* PRODUCT VIEW AREA */
        }
          <Grid item xl={10} md={9} xs={12}>
            {view === "grid" ? <ProductsGridView products={PRODUCTS} /> : <ProductsListView products={PRODUCTS} />}
          </Grid>
        </Grid>
      </Container>
    </div>;
}