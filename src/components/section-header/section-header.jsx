"use client";

import Link from "next/link";

// MUI ICON COMPONENTS
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight"; 
// LOCAL CUSTOM COMPONENTS

import { H2 } from "../Typography";
import { FlexBetween, FlexBox } from "../flex-box"; 
// GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; 
// ===================================================


// ===================================================
export default function SectionHeader({
  title,
  seeMoreLink,
  icon
}) {
  const {
    settings
  } = useSettings();
  return <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon ?? null}
        <H2 lineHeight={1}>{title}</H2>
      </FlexBox>

      {seeMoreLink ? <Link href={seeMoreLink}>
          <FlexBox alignItems="center" color="grey.600">
            View all
            {settings.direction === "ltr" ? <ArrowRight fontSize="small" color="inherit" /> : <ArrowLeft fontSize="small" color="inherit" />}
          </FlexBox>
        </Link> : null}
    </FlexBetween>;
}