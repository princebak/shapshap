import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; 
// GLOBAL CUSTOM COMPONENT

import { H4 } from "components/Typography";

const ShippingVatForm = () => {
  const initialValues = {
    vat: 2,
    shipping: 10
  };

  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <H4>Shipping and Vat</H4>
            </Grid>

            <Grid item md={7} xs={12}>
              <TextField fullWidth color="info" size="medium" type="number" name="shipping" onBlur={handleBlur} label="Shipping Charge" onChange={handleChange} value={values.shipping} helperText={touched.shipping && errors.shipping} error={Boolean(touched.shipping && errors.shipping)} />
            </Grid>

            <Grid item md={7} xs={12}>
              <TextField fullWidth name="vat" color="info" size="medium" type="number" label="VAT (%)" value={values.vat} onBlur={handleBlur} onChange={handleChange} helperText={touched.vat && errors.vat} error={Boolean(touched.vat && errors.vat)} />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" color="info" variant="contained">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>}
    </Formik>;
};

export default ShippingVatForm;