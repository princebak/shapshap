"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import styled from "@mui/material/styles/styled"; 
// Local CUSTOM COMPONENTS

import TopbarForm from "../topbar-form";
import FooterForm from "../footer-form";
import GeneralForm from "../general-form";
import BannerSlider from "../banner-slider";
import ShippingVatForm from "../shipping-vat-form";
import SocialLinksForm from "../social-links-form"; 
// STYLED COMPONENTS

const StyledTabPanel = styled(TabPanel)({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0
});
const StyledTabList = styled(TabList)(({
  theme
}) => ({
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.info.main
  },
  "& .MuiTabs-indicator": {
    background: theme.palette.info.main
  }
}));

const SiteSettingsPageView = () => {
  const [selectTab, setSelectTab] = useState("general");
  return <Box py={4}>
      <Card sx={{
      px: 3,
      py: 2
    }}>
        <TabContext value={selectTab}>
          <Box sx={{
          borderBottom: 1,
          borderColor: "grey.300"
        }}>
            <StyledTabList onChange={(_, value) => setSelectTab(value)} variant="scrollable">
              <Tab label="General" value="general" disableRipple />
              <Tab label="Topbar" value="topbar" disableRipple />
              <Tab label="Footer" value="footer" disableRipple />
              <Tab label="Social Links" value="social-links" disableRipple />
              <Tab label="Banner Slider" value="banner-slider" disableRipple />
              <Tab label="Shipping & Vat" value="shipping-vat" disableRipple />
            </StyledTabList>
          </Box>

          <StyledTabPanel value="general">
            <GeneralForm />
          </StyledTabPanel>

          <StyledTabPanel value="topbar">
            <TopbarForm />
          </StyledTabPanel>

          <StyledTabPanel value="footer">
            <FooterForm />
          </StyledTabPanel>

          <StyledTabPanel value="social-links">
            <SocialLinksForm />
          </StyledTabPanel>

          <StyledTabPanel value="banner-slider">
            <BannerSlider />
          </StyledTabPanel>

          <StyledTabPanel value="shipping-vat">
            <ShippingVatForm />
          </StyledTabPanel>
        </TabContext>
      </Card>
    </Box>;
};

export default SiteSettingsPageView;