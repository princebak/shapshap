"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { H1, Paragraph } from "components/Typography"; 
// STYLED COMPONENT

const Wrapper = styled(BazaarCard)({
  margin: "auto",
  padding: "3rem",
  maxWidth: "630px",
  textAlign: "center"
});
const StyledButton = styled(Button)({
  marginTop: "2rem",
  padding: "11px 24px"
});
export default function OrderConfirmationPageView() {
  return <Container className="mt-2 mb-10">
      <Wrapper>
        <Image width={116} height={116} alt="complete" src="/assets/images/illustrations/party-popper.svg" />
        <H1 lineHeight={1.1} mt="1.5rem">
          Your order is completed!
        </H1>

        <Paragraph color="grey.800" mt="0.3rem">
          You will be receiving confirmation email with order details.
        </Paragraph>

        <StyledButton color="primary" disableElevation variant="contained" className="button-link" LinkComponent={Link} href="/market-1">
          Browse products
        </StyledButton>
      </Wrapper>
    </Container>;
}