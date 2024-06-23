"use client";

import { usePathname } from "next/navigation";
// LOCAL CUSTOM COMPONENTS

import BoxLink from "./components/box-link";
import LogoWithTitle from "./components/logo-title";
import LoginBottom from "./components/login-bottom";
// GLOBAL CUSTOM COMPONENTS

import { FlexBox, FlexRowCenter } from "components/flex-box";
// COMMON STYLED COMPONENT

import { Wrapper } from "./styles";
export default function AuthLayout({ children }) {
  const pathname = usePathname();
  let BOTTOM_CONTENT = null;
  // APPLIED FOR ONLY LOGIN PAGE

  if (pathname === "/login") {
    BOTTOM_CONTENT = <LoginBottom />;
  }
  // APPLIED FOR ONLY REGISTER PAGE

  if (pathname === "/register") {
    BOTTOM_CONTENT = (
      <FlexRowCenter gap={1} mt={3}>
        Already have an account?
        <BoxLink title="Login" href="/login" />
      </FlexRowCenter>
    );
  }
  // FOR RESET PASSWORD AND CHANGE PASSWPRD PAGES
  if ((pathname === "/reset-password") | (pathname === "/change-password")) {
    BOTTOM_CONTENT = (
      <FlexBox
        gap={1}
        py={2}
        borderRadius={1}
        justifyContent="center"
        bgcolor="grey.200"
        mt={3}
      >
        Have you remembred your password ?
        <BoxLink title="Login" href="/login" />
      </FlexBox>
    );
  }
  // APPLIED FOR ONLY RESET PASSWORD PAGE

  if (pathname === "/reset-password") {
    return (
      <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
        <Wrapper elevation={3}>
          {children} {BOTTOM_CONTENT}
        </Wrapper>
      </FlexRowCenter>
    );
  }

  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
      <Wrapper elevation={3}>
        {/* LOGO WITH TITLE AREA */}
        <LogoWithTitle />

        {/* FORM AREA */}
        {children}

        {/* RENDER BOTTOM CONTENT BASED ON CONDITION */}
        {BOTTOM_CONTENT}
      </Wrapper>
    </FlexRowCenter>
  );
}
