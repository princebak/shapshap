import Link from "next/link";
import { useState } from "react"; 
// MUI

import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import TouchRipple from "@mui/material/ButtonBase"; 
// TRANSLATION

import { useTranslation } from "react-i18next"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import ExpandMore from "@mui/icons-material/ExpandMore"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import BazaarMenu from "components/BazaarMenu";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// STYLED COMPONENTS

import { StyledChip, StyledContainer, StyledRoot } from "./styles"; 
// ==============================================================


// ==============================================================

// LANGUAGE OPTIONS
const languageOptions = {
  en: {
    title: "EN",
    value: "en"
  },
  es: {
    title: "DE",
    value: "de"
  }
};
const socialLinks = [{
  id: 1,
  Icon: Twitter,
  url: "#"
}, {
  id: 2,
  Icon: Facebook,
  url: "#"
}, {
  id: 3,
  Icon: Instagram,
  url: "#"
}]; 
// ===========================================


// ===========================================
export default function Topbar({
  bgColor
}) {
  const {
    i18n,
    t
  } = useTranslation();
  const [expand, setExpand] = useState(false);

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = languageOptions[i18n.language];
  return <StyledRoot bgColor={bgColor} expand={expand ? 1 : 0}>
      <StyledContainer>
        <FlexBetween width="100%">
          <FlexBox alignItems="center" gap={1}>
            <StyledChip label={t("HOT")} size="small" />
            <Span className="title">{t("Free Express Shipping")}</Span>
          </FlexBox>

          <IconButton disableRipple className="expand" onClick={() => setExpand(state => !state)}>
            {expand ? <Remove /> : <Add />}
          </IconButton>
        </FlexBetween>

        <FlexBox className="topbarRight" alignItems="center">
          {
          /* LANGUAGE MENU SELECTOR */
        }
          <BazaarMenu handler={e => <TouchRipple className="handler marginRight" onClick={e}>
                <Span className="menuTitle">{selectedLanguage.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>} options={onClose => {
          return Object.keys(languageOptions).map(language => <MenuItem className="menuItem" key={languageOptions[language].title} onClick={() => {
            handleChangeLanguage(language);
            onClose();
          }}>
                  <Span className="menuTitle">{languageOptions[language].title}</Span>
                </MenuItem>);
        }} />

          {
          /* SOCIAL LINKS AREA */
        }
          <FlexBox alignItems="center" gap={1.5}>
            {socialLinks.map(({
            id,
            Icon,
            url
          }) => <Link href={url} key={id}>
                <Icon sx={{
              fontSize: 16
            }} />
              </Link>)}
          </FlexBox>
        </FlexBox>
      </StyledContainer>
    </StyledRoot>;
}