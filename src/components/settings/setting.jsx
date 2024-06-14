"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
// MUI

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener"; 
// MUI ICON COMPONENTS

import Close from "@mui/icons-material/Close";
import Settings from "@mui/icons-material/Settings"; 
// LOCAL CUSTOM COMPONENTS

import { H6 } from "../Typography";
import Scrollbar from "../scrollbar/scrollbar";
import FlexBox from "../flex-box/flex-box"; 
// GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; 
// STYLED COMPONENTS

import { BodyWrapper, MainContainer, StyledAvatar, StyledIconButton } from "./styles";
export default function Setting() {
  const {
    push
  } = useRouter();
  const {
    updateSettings,
    settings
  } = useSettings();
  const [showBody, setShowBody] = useState(false);
  return <ClickAwayListener onClickAway={() => setShowBody(false)}>
      <MainContainer>
        <Tooltip title="Settings & Demos" placement="left">
          <StyledIconButton onClick={() => setShowBody(state => !state)}>
            {!showBody && <Settings />}
            {showBody && <Close />}
          </StyledIconButton>
        </Tooltip>

        <BodyWrapper showBody={showBody ? 1 : 0}>
          <Scrollbar sx={{
          maxHeight: showBody ? "calc(100vh - 200px)" : 0
        }}>
            <FlexBox gap={2}>
              <Button fullWidth onClick={() => updateSettings({
              direction: "rtl"
            })} color={settings.direction === "rtl" ? "primary" : "secondary"} variant={settings.direction === "rtl" ? "contained" : "outlined"}>
                RTL
              </Button>

              <Button fullWidth onClick={() => updateSettings({
              direction: "ltr"
            })} color={settings.direction === "ltr" ? "primary" : "secondary"} variant={settings.direction === "ltr" ? "contained" : "outlined"}>
                LTR
              </Button>
            </FlexBox>

            <Divider sx={{
            my: 3
          }} />

            <H6 textAlign="center" mb={2}>
              Bazaar Demos
            </H6>

            <FlexBox gap={2} flexWrap="wrap">
              {demos.map(demo => <StyledAvatar key={demo.id} src={demo.img} onClick={() => push(demo.path)} />)}
            </FlexBox>
          </Scrollbar>
        </BodyWrapper>
      </MainContainer>
    </ClickAwayListener>;
}
const demos = [{
  id: 17,
  path: "/furniture-3",
  img: "/assets/images/landing/home/furniture-3.jpg"
}, {
  id: 16,
  path: "/gadget-3",
  img: "/assets/images/landing/home/gadget-3.jpg"
}, {
  id: 15,
  path: "/grocery-4",
  img: "/assets/images/landing/home/grocery-4.jpg"
}, {
  id: 12,
  path: "/furniture-2",
  img: "/assets/images/landing/home/furniture-2.jpg"
}, {
  id: 13,
  path: "/gadget-2",
  img: "/assets/images/landing/home/gadget-2.png"
}, {
  id: 14,
  path: "/medical",
  img: "/assets/images/landing/home/medical.png"
}, {
  id: 5,
  path: "/fashion-3",
  img: "/assets/images/landing/home/fashion-3.jpg"
}, {
  id: 0,
  path: "/market-1",
  img: "/assets/images/landing/page-1.png"
}, {
  id: 1,
  path: "/market-2",
  img: "/assets/images/landing/home/market-2.jpg"
}, {
  id: 9,
  path: "/grocery-1",
  img: "/assets/images/landing/grocery1.png"
}, {
  id: 2,
  path: "/grocery-2",
  img: "/assets/images/landing/page-2.png"
}, {
  id: 10,
  path: "/grocery-3",
  img: "/assets/images/landing/grocery3.png"
}, {
  id: 3,
  path: "/fashion-1",
  img: "/assets/images/landing/page-3.png"
}, {
  id: 4,
  path: "/fashion-2",
  img: "/assets/images/landing/home/fashion-2.jpg"
}, {
  id: 6,
  path: "/gadget-1",
  img: "/assets/images/landing/page-4.png"
}, {
  id: 7,
  path: "/furniture-1",
  img: "/assets/images/landing/furniture.png"
}, {
  id: 8,
  path: "/gift-shop",
  img: "/assets/images/landing/gift-shop.png"
}, {
  id: 11,
  path: "/health-beauty",
  img: "/assets/images/landing/healthbeauty.png"
}];