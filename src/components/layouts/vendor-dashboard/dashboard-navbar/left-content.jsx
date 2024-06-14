import Link from "next/link";
import { Fragment } from "react"; 
// CUSTOM ICON COMPONENTS

import Globe from "icons/Globe";
import Toggle from "icons/Toggle"; 
// LOCAL CUSTOM HOOKS

import { useLayout } from "../dashboard-layout-context"; 
// STYLED COMPONENTS

import { CustomButton, ToggleWrapper } from "./styles";
export default function LeftContent() {
  const {
    handleOpenMobileSidebar
  } = useLayout();
  return <Fragment>
      <ToggleWrapper onClick={handleOpenMobileSidebar}>
        <Toggle />
      </ToggleWrapper>

      <CustomButton LinkComponent={Link} href="/" startIcon={<Globe sx={{
      color: "grey.900"
    }} />}>
        Browse Website
      </CustomButton>
    </Fragment>;
}