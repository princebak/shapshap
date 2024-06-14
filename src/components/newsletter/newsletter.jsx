"use client";

import { useEffect, useState } from "react"; 
// MUI

import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import ClickAwayListener from "@mui/material/ClickAwayListener"; 
// MUI UTILS METHODS

import debounce from "@mui/material/utils/debounce"; 
// MUI ICON COMPONENTS

import Clear from "@mui/icons-material/Clear"; 
// GLOBAL CUSTOM COMPONENTS

import { H1, Paragraph, Span } from "../Typography"; 
// LOCAL CUSTOM COMPONENT

import SocialIcons from "./social-icons"; 
// STYLED COMPONENTS

import { Wrapper } from "./styles"; 
// ======================================================


// ======================================================
export default function Newsletter({
  image = "/assets/images/newsletter/bg-1.png"
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!window) return;

    if (!window.sessionStorage.getItem("newsletter")) {
      debounce(() => {
        setOpen(true);
        window.sessionStorage.setItem("newsletter", "true");
      }, 2000)();
    }
  }, []);
  return <ClickAwayListener onClickAway={handleClose}>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{
      zIndex: 999999999
    }}>
        <Wrapper img={image}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} display={{
            md: "flex",
            xs: "none"
          }} />

            <Grid item lg={6} md={6} xs={12} alignItems="center">
              <div className="content">
                <Paragraph fontSize={22} fontWeight={700}>
                  UP TO <Span color="primary.main">30% OFF</Span>
                </Paragraph>

                <H1 fontSize={36} fontWeight={700} mb={2}>
                  Sign up to <Span color="primary.main">BAZAAR</Span>
                </H1>

                <Paragraph color="grey.600" mb={5}>
                  Subscribe to the BAZAR eCommerce newsletter to receive timely updates from your
                  favorite products.
                </Paragraph>

                <TextField fullWidth className="emailInput" placeholder="Enter your email address" />

                <Button variant="contained" fullWidth color="primary" sx={{
                p: 1.5
              }}>
                  SUBMIT
                </Button>

                <SocialIcons />

                <FormControlLabel control={<Checkbox defaultChecked />} label="No, Thanks" />
              </div>
            </Grid>
          </Grid>

          <IconButton onClick={handleClose} className="clear-btn">
            <Clear color="inherit" />
          </IconButton>
        </Wrapper>
      </Modal>
    </ClickAwayListener>;
}