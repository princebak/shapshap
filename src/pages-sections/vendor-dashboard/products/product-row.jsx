import { useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import BazaarSwitch from "components/BazaarSwitch";
import { Paragraph, Small } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
// STYLED COMPONENTS

import {
  StyledTableRow,
  CategoryWrapper,
  StyledTableCell,
  StyledIconButton,
} from "../styles";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeCurrentProduct } from "redux/slices/productSlice";
// ========================================================================

// ========================================================================
export default function ProductRow({ product }) {
  const { category, name, price, images, brand, id, published, code } =
    product || {};
  const router = useRouter();
  const [productPublish, setProductPublish] = useState(published);
  const dispatch = useDispatch();

  const handleEditProduct = (code) => {
    dispatch(changeCurrentProduct(code));
    router.push(`/vendor/products/${code}`);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Link href={`/vendor/products/${code}`}>
            <Avatar
              alt={name}
              src={images && images.length > 0 ? images[0] : ""}
              sx={{
                borderRadius: 2,
              }}
            />
            <div>
              <Paragraph fontWeight={600}>{name}</Paragraph>
              <Small color="grey.600">#{code}</Small>
            </div>
          </Link>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{category}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Avatar
          src={brand}
          sx={{
            width: 55,
            height: "auto",
            borderRadius: 0,
          }}
        />
      </StyledTableCell>

      <StyledTableCell align="left">{currency(price)}</StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={productPublish}
          onChange={() => setProductPublish((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => handleEditProduct(code)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}
