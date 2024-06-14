import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
export default function MessageForm() {
  const initialValues = {
    message: ""
  };
  const validationSchema = yup.object().shape({
    message: yup.string().required("Message is required")
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });
  return <form onSubmit={handleSubmit}>
      <TextField rows={8} fullWidth multiline value={values.message} onBlur={handleChange} onChange={handleChange} placeholder="Write your message here..." helperText={touched.message && errors.message} error={Boolean(touched.message && errors.message)} sx={{
      mb: 2
    }} />

      <Button type="submit" color="primary" variant="contained">
        Post message
      </Button>
    </form>;
}