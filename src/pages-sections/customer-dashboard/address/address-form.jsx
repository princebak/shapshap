import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup"; 
// CUSTOM DATA MODEL


// =============================================================
export default function AddressForm({
  address
}) {
  const INITIAL_VALUES = {
    name: address.title || "",
    address: address.street || "",
    contact: address.phone || ""
  };
  const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required("required"),
    address: yup.string().required("required"),
    contact: yup.string().required("required")
  }); 
// HANDLE FORM SUBMIT

  const handleSubmit = async values => {
    console.log(values);
  };

  return <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth name="name" label="Name" onBlur={handleBlur} value={values.name} onChange={handleChange} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="address" onBlur={handleBlur} label="Address Line" value={values.address} onChange={handleChange} error={!!touched.address && !!errors.address} helperText={touched.address && errors.address} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Phone" name="contact" onBlur={handleBlur} value={values.contact} onChange={handleChange} error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>}
    </Formik>;
}