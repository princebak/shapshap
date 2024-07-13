"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { H1, Paragraph } from "components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { orderStatus } from "utils/constants";
import { useRouter } from "next/navigation";
import { completeOrder, createOrder } from "services/OrderService";
import { useEffect, useState } from "react";
import { reinitOrder } from "redux/slices/orderSlice";
import { resetCart } from "redux/slices/cartSlice";
// STYLED COMPONENT

const Wrapper = styled(BazaarCard)({
  margin: "auto",
  padding: "3rem",
  maxWidth: "630px",
  textAlign: "center",
});
const StyledButton = styled(Button)({
  marginTop: "2rem",
  padding: "11px 24px",
});
export default function OrderConfirmationPageView() {
  const { currentOrder } = useSelector((state) => state.order);
  const router = useRouter();
  const [orderIsSaved, setOrderIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const completeTheOrder = async () => {
      if (currentOrder?.status === orderStatus.PROCESSING) {
        await completeOrder(currentOrder.code);
        setOrderIsSaved(true);
      }
    };
    if (orderIsSaved) {
      dispatch(reinitOrder());
      dispatch(resetCart());
    } else {
      completeTheOrder();
    }
  }, [orderIsSaved]);

  return (
    <Container className="mt-2 mb-10">
      <Wrapper>
        <Image
          width={116}
          height={116}
          alt="complete"
          src="/assets/images/illustrations/party-popper.svg"
        />
        <H1 lineHeight={1.1} mt="1.5rem">
          Your order is completed!
        </H1>

        <Paragraph color="grey.800" mt="0.3rem">
          Your payment has been done with success, click on the button below to
          browse more articles.
        </Paragraph>

        <StyledButton
          color="primary"
          disableElevation
          variant="contained"
          className="button-link"
          LinkComponent={Link}
          href="/articles"
        >
          Browse articles
        </StyledButton>
      </Wrapper>
    </Container>
  );
}
