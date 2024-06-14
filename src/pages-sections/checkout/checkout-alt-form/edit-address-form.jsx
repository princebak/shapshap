import { useState } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";
import * as yup from "yup"; 
// GLOBAL CUSTOM COMPONENT

import { H5 } from "components/Typography";
const validationSchema = yup.object({
  address2: yup.string(),
  name: yup.string().required("Name is required!"),
  address1: yup.string().required("Address is required!"),
  phone: yup.number().required("Phone is required!")
}); 
// ================================================================


// ================================================================
export default function EditAddressForm(props) {
  const {
    active,
    address,
    changeEditAddressId,
    handleEditAddress
  } = props;
  const [openModal, setOpenModal] = useState(active);

  const handleCloseModal = () => {
    setOpenModal(false);
    changeEditAddressId();
  };

  const initialValues = {
    name: address.name,
    phone: address.phone,
    street1: address.street1,
    street2: address.street2
  };
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      handleEditAddress(address.id, { ...values,
        id: address.id
      });
      handleCloseModal();
    }
  });
  return <Dialog open={openModal} onClose={handleCloseModal} sx={{
    zIndex: 99999
  }}>
      <DialogContent>
        <H5 mb={4}>Edit Address Information</H5>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="name" type="text" label="Enter Your Name" value={values.name} onBlur={handleBlur} onChange={handleChange} helperText={touched.name && errors.name} error={touched.name && Boolean(errors.name)} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth type="text" name="street1" label="Address line 1" onBlur={handleBlur} value={values.street1} onChange={handleChange} helperText={touched.street1 && errors.street1} error={touched.street1 && Boolean(errors.street1)} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth type="text" name="street2" label="Address line 2" onBlur={handleBlur} value={values.street2} onChange={handleChange} helperText={touched.street2 && errors.street2} error={touched.street2 && Boolean(errors.street2)} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth type="text" name="phone" label="Enter Your Phone" onBlur={handleBlur} value={values.phone} onChange={handleChange} helperText={touched.phone && errors.phone} error={touched.phone && Boolean(errors.phone)} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>;
}