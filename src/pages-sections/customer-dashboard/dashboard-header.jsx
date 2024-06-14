import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; 
// MUI ICON COMPONENTS

import { Menu } from "@mui/icons-material"; 
// GLOBAL CUSTOM COMPONENTS

import SideNav from "components/side-nav";
import { H2 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import { Navigation } from "components/layouts/customer-dashboard";
import { IconButton } from "@mui/material"; 
// STYLED COMPONENT

const StyledBox = styled("div")(({
  theme
}) => ({
  display: "flex",
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  "& .headerHold": {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  [theme.breakpoints.up("md")]: {
    "& .sidenav": {
      display: "none"
    }
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column"
  }
})); 
// ==============================================================


// ==============================================================
export default function DashboardHeader({
  title,
  buttonText,
  href,
  Icon
}) {
  const isTablet = useMediaQuery(theme => theme.breakpoints.down(1025));
  const HEADER_LINK = <Button href={href} color="primary" LinkComponent={Link} sx={{
    bgcolor: "primary.light",
    px: 4
  }}>
      {buttonText}
    </Button>;
  return <StyledBox>
      <FlexBox mt={2} className="headerHold">
        <FlexBox alignItems="center" gap={1.5}>
          {Icon && <Icon color="primary" />}

          <H2 my={0} lineHeight={1} ellipsis>
            {title}
          </H2>
        </FlexBox>

        <div className="sidenav">
          <SideNav position="left" handler={close => <IconButton onClick={close}>
                <Menu fontSize="small" />
              </IconButton>}>
            <Navigation />
          </SideNav>
        </div>

        {!isTablet && buttonText ? HEADER_LINK : null}
      </FlexBox>

      {isTablet && buttonText ? <Box mt={2}>{HEADER_LINK}</Box> : null}
    </StyledBox>;
}