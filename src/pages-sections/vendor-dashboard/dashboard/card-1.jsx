"use client";

import Card from "@mui/material/Card"; 
// MUI ICON COMPONENTS

import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown"; 
// GLOBAL CUSTOM COMPONENTS

import { H3, H6, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// ========================================================


// ========================================================
export default function Card1(props) {
  const {
    title,
    amount1,
    amount2,
    percentage,
    status = "up",
    color = "info.main"
  } = props;
  return <Card className="p-1">
      <H6 mb={1} color="grey.600">
        {title}
      </H6>

      <H3 mb={0.3}>{amount1}</H3>

      <FlexBetween>
        <Paragraph fontWeight={500} color="grey.500">
          {amount2}
        </Paragraph>

        <FlexBox alignItems="center" color={color}>
          {status === "up" && <ArrowDropUp />}
          {status === "down" && <ArrowDropDown />}
          <Paragraph fontSize={12}>{percentage}</Paragraph>
        </FlexBox>
      </FlexBetween>
    </Card>;
}