import Link from "next/link";
import { Fragment } from "react"; 
// MUI

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography"; 
// ICON COMPONENTS

import Menu from "@mui/icons-material/Menu";
import { Link as Scroll } from "react-scroll";
import clsx from "clsx"; 
// CUSTOM COMPONENT

import SideNav from "components/side-nav";
import Image from "components/BazaarImage";
import FlexBox from "components/flex-box/flex-box"; 
// HOOKS

import useHeader from "./use-header";
const headerHeight = 72; 
// STYLED COMPONENT

import { HeaderWrapper } from "./styles";
export default function Header() {
  const {
    downSM,
    isFixed,
    open,
    toggleSidenav
  } = useHeader();
  return <Fragment>
      <HeaderWrapper>
        <div className={clsx({
        fixedHeader: isFixed
      })}>
          <Container>
            <FlexBox height={headerHeight} alignItems="center">
              <Scroll to="top" duration={400} smooth={true} isDynamic>
                <Box sx={{
                cursor: "pointer"
              }}>
                  <Image width="96px" height="44px" src="/assets/images/logo2.svg" alt="logo" />
                </Box>
              </Scroll>

              <Box mx="auto" />

              <FlexBox className="right-links" alignItems="center">
                <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>
                  <Typography className="link" color="grey.600" p="0.25rem 1.25rem">
                    Features
                  </Typography>
                </Scroll>

                <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>
                  <Typography className="link" color="grey.600" p="0.25rem 1.25rem">
                    Demos
                  </Typography>
                </Scroll>
                <a href="https://652ed2ada2aac403b8c8e050-hzbjgoehdi.chromatic.com/?path=/docs/components-carousel-carousel--docs" target="__blank">
                  <Typography className="link" color="grey.600" p="0.25rem 1.25rem">
                    Storybook
                  </Typography>
                </a>
                <a href="https://bazaar-doc.netlify.app/" target="__blank">
                  <Typography className="link" color="grey.600" p="0.25rem 1.25rem">
                    Documentation
                  </Typography>
                </a>
              </FlexBox>

              {downSM ? <SideNav open={open} width={260} position="right" toggle={toggleSidenav} handler={handle => <IconButton onClick={handle}>
                      <Menu />
                    </IconButton>}>
                  <Box p={2} sx={{
                "& .link": {
                  cursor: "pointer",
                  transition: "color 250ms ease-in-out",
                  "&:hover": {
                    color: "primary.main"
                  }
                }
              }}>
                    <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>
                      <Typography className="link" py={1} onClick={toggleSidenav}>
                        Features
                      </Typography>
                    </Scroll>

                    <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>
                      <Typography className="link" py={1} onClick={toggleSidenav}>
                        Demos
                      </Typography>
                    </Scroll>

                    <Scroll smooth={true} duration={400} to="technologies" offset={-headerHeight - 16}>
                      <Typography className="link" py={1} mb={2} onClick={toggleSidenav}>
                        Technologies
                      </Typography>
                    </Scroll>

                    <Button href="https://material-ui.com/store/items/bazaar-pro-react-ecommerce-template/" LinkComponent={Link} variant="outlined" color="primary" target="_blank">
                      Purchase Now
                    </Button>
                  </Box>
                </SideNav> : <a target="__blank" href="https://tinyurl.com/get-bazaar">
                  <Button variant="outlined">Purchase Now</Button>
                </a>}
            </FlexBox>
          </Container>
        </div>
      </HeaderWrapper>

      {isFixed && <Box height={headerHeight} />}
    </Fragment>;
}