import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react"; 
// MUI

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON

import Visibility from "@mui/icons-material/Visibility"; 
// CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import { TitleBadge } from "./styles"; 
// STYLED COMPONENTS

const Wrapper = styled("div")(({
  theme
}) => ({
  marginBottom: "1.5rem",
  padding: "6% 6% 0px",
  overflow: "hidden",
  cursor: "pointer",
  marginTop: "1rem",
  position: "relative",
  borderRadius: "0.5rem",
  backgroundColor: theme.palette.grey[200],
  border: `1px solid ${theme.palette.grey[300]}`,
  "& .overlay": {
    transition: "0.3s ease-in-out"
  },
  "&:hover": {
    ".overlay": {
      opacity: 1
    }
  }
}));
const StatusChip = styled("div")(({
  theme
}) => ({
  width: 44,
  height: 44,
  zIndex: 11,
  top: "10px",
  right: "8px",
  color: "#fff",
  fontWeight: 700,
  fontSize: "13px",
  borderRadius: 36,
  padding: "11px 7px",
  position: "absolute",
  boxShadow: theme.shadows[2],
  background: theme.palette.dark.main
}));
const StyledFlex = styled(FlexBox)({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0, 0.54)"
}); 
// =========================================================


// =========================================================
export default function PageCard(props) {
  const {
    title,
    imgUrl,
    previewUrl,
    disabled,
    status,
    no
  } = props;
  return <Fragment>
      <Wrapper>
        <Card elevation={3} sx={{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }}>
          <Image priority alt="cover" sizes="100%" src={imgUrl} width={1175} height={1000} style={{
          width: "100%",
          height: "auto",
          display: "flex",
          objectFit: "contain",
          objectPosition: "top center"
        }} />
        </Card>

        {status && <StatusChip>{status}</StatusChip>}

        {!disabled && <Link href={previewUrl} target="_blank">
            <StyledFlex className="overlay">
              <IconButton sx={{
            bgcolor: "white",
            "&:hover": {
              bgcolor: "white"
            }
          }}>
                <Visibility fontSize="small" />
              </IconButton>
            </StyledFlex>
          </Link>}
      </Wrapper>

      <H3 textAlign="center" lineHeight="1" fontSize="14px">
        {title} {no ? <TitleBadge>({no})</TitleBadge> : null}
      </H3>
    </Fragment>;
}