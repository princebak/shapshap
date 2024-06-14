"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup"; 
// GLOBAL CUSTOM COMPONENTS

import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box"; 
// STYLED COMPONENTS

import { UploadImageBox, StyledClear } from "../styles"; 
// FORM FIELDS VALIDATION SCHEMA

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  category: yup.array(yup.string()).min(1, "Category must have at least 1 items").required("Category is required!"),
  description: yup.string().required("Description is required!"),
  stock: yup.number().required("Stock is required!"),
  price: yup.number().required("Price is required!"),
  sale_price: yup.number().optional(),
  tags: yup.string().required("Tags is required!")
}); 
// ================================================================


// ================================================================
export default function ProductForm(props) {
  const INITIAL_VALUES = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    category: [],
    sale_price: "",
    description: ""
  };

  const handleFormSubmit = values => {
    console.log(values);
  };

  const [files, setFiles] = useState([]); 
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
                <TextField select fullWidth color="info" size="medium" name="category" onBlur={handleBlur} placeholder="Category" onChange={handleChange} value={values.category} label="Select Category" SelectProps={{
              multiple: true
            }} error={Boolean(touched.category && errors.category)} helperText={touched.category && errors.category}>
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <DropZone onChange={files => handleChangeDropZone(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => {
                return <UploadImageBox key={index}>
                        <Box component="img" src={file.preview} width="100%" />
                        <StyledClear onClick={handleFileDelete(file)} />
                      </UploadImageBox>;
              })}
                </FlexBox>
              </Grid>

              <Grid item xs={12}>
                <TextField rows={6} multiline fullWidth color="info" size="medium" name="description" label="Description" onBlur={handleBlur} onChange={handleChange} placeholder="Description" value={values.description} helperText={touched.description && errors.description} error={Boolean(touched.description && errors.description)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="stock" color="info" size="medium" label="Stock" placeholder="Stock" onBlur={handleBlur} value={values.stock} onChange={handleChange} helperText={touched.stock && errors.stock} error={Boolean(touched.stock && errors.stock)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="tags" label="Tags" color="info" size="medium" placeholder="Tags" onBlur={handleBlur} value={values.tags} onChange={handleChange} helperText={touched.tags && errors.tags} error={Boolean(touched.tags && errors.tags)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="price" color="info" size="medium" type="number" onBlur={handleBlur} value={values.price} label="Regular Price" onChange={handleChange} placeholder="Regular Price" helperText={touched.price && errors.price} error={Boolean(touched.price && errors.price)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth color="info" size="medium" type="number" name="sale_price" label="Sale Price" onBlur={handleBlur} onChange={handleChange} placeholder="Sale Price" value={values.sale_price} helperText={touched.sale_price && errors.sale_price} error={Boolean(touched.sale_price && errors.sale_price)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Save product
                </Button>
              </Grid>
            </Grid>
          </form>}
      </Formik>
    </Card>;
}