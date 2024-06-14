import Pagination from "@mui/material/Pagination"; 
// CUSTOM GLOBAL COMPONENTS

import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between"; 
// CUSTOM UTILITY FUNCTION

import { renderProductCount } from "lib"; 
// ==============================================================


// ==============================================================
export default function ProductPagination({
  page,
  perPage,
  totalProducts,
  handlePageChange
}) {
  return <FlexBetween flexWrap="wrap" my={8}>
      <Span>{renderProductCount(page, perPage, totalProducts)}</Span>

      <Pagination page={page} color="primary" variant="outlined" onChange={handlePageChange} count={Math.ceil(totalProducts / perPage)} />
    </FlexBetween>;
}