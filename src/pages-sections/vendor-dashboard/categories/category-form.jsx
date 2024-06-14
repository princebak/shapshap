"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik } from "formik";
import * as yup from "yup"; 
// GLOBAL CUSTOM COMPONENTS

import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box"; 
// STYLED COMPONENTS

import { UploadImageBox, StyledClear } from "../styles"; 
// FORM FIELDS VALIDATION

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name required")
}); 
// ================================================================


// ================================================================
export default function CategoryForm(props) {
  const [files, setFiles] = useState([]);
  const INITIAL_VALUES = {
    name: "",
    parent: [],
    featured: false
  };

  const handleFormSubmit = () => {}; 
// HANDLE UPDATE NEW IMAGE VIA DROP ZONE


  const handleChangeDropZone = files => {
    files.forEach(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles(files);
  }; 
// HANDLE DELETE UPLOAD IMAGE


  const handleFileDelete = file => () => {
    setFiles(files => files.filter(item => item.name !== file.name));
  };

  return <Card className="p-3">
      <Formik onSubmit={handleFormSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="name" label="Name" color="info" size="medium" placeholder="Name" value={values.name} onBlur={handleBlur} onChange={handleChange} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField select fullWidth color="info" size="medium" name="parent" onBlur={handleBlur} value={values.parent} onChange={handleChange} placeholder="Parent Category" label="Select Parent Category" SelectProps={{
              multiple: true
            }}>
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <DropZone title="Drop & drag category image" onChange={files => handleChangeDropZone(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => {
                return <UploadImageBox key={index}>
                        <Box component="img" alt="product" src={file.preview} width="100%" />
                        <StyledClear onClick={handleFileDelete(file)} />
                      </UploadImageBox>;
              })}
                </FlexBox>
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControlLabel label="Featured Category" control={<Checkbox color="info" name="featured" onBlur={handleBlur} onChange={handleChange} value={values.featured} />} />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Save category
                </Button>
              </Grid>
            </Grid>
          </form>}
      </Formik>
    </Card>;
}