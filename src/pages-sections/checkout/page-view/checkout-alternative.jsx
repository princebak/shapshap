import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import { CheckoutForm } from "../checkout-alt-form";
import { CheckoutAltSummery } from "../checkout-alt-summery";
export default function CheckoutAlternativePageView() {
  return <Container sx={{
    my: "1.5rem"
  }}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          <CheckoutForm />
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <CheckoutAltSummery />
        </Grid>
      </Grid>
    </Container>;
}