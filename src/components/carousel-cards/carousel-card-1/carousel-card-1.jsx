import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography"; 
// STYLED COMPONENT

import { StyledRoot } from "./styles"; 
// ==================================================


// ==================================================
export default function CarouselCard1({
  title,
  imgUrl,
  buttonLik,
  buttonText,
  description,
  buttonColor = "primary"
}) {
  return <StyledRoot>
      <Grid container spacing={3} alignItems="center">
        <Grid item className="grid-item" xl={4} md={5} sm={6} xs={12}>
          <h1 className="title">{title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {description}
          </Paragraph>

          <a href={buttonLik}>
            <Button size="large" disableElevation color={buttonColor} variant="contained" className="button-link" sx={{
            height: 44,
            borderRadius: "4px"
          }}>
              {buttonText}
            </Button>
          </a>
        </Grid>

        <Grid item xl={8} md={7} sm={6} xs={12}>
          <BazaarImage src={imgUrl} alt="apple-watch-1" sx={{
          mx: "auto",
          maxHeight: 400,
          display: "block",
          maxWidth: "100%"
        }} />
        </Grid>
      </Grid>
    </StyledRoot>;
}