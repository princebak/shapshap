import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENTS

import Google from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram"; 
// GLOBAL CUSTOM COMPONENT

import FlexRowCenter from "components/flex-box/flex-row-center"; 
// CUSTOM ICON COMPONENT

import Facebook from "icons/Facebook";
const STYLE = {
  fontSize: 20,
  color: "grey.900"
};
export default function SocialIcons() {
  return <FlexRowCenter mt={4} mb={2}>
      <IconButton>
        <Facebook sx={STYLE} />
      </IconButton>

      <IconButton>
        <Twitter sx={STYLE} />
      </IconButton>

      <IconButton>
        <Instagram sx={STYLE} />
      </IconButton>

      <IconButton>
        <Google sx={STYLE} />
      </IconButton>
    </FlexRowCenter>;
}