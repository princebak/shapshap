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

import { UploadImageBox, StyledClear, StyledIconButton } from "../styles";
import MessageAlert from "components/MessageAlert";
import Link from "next/link";
import {
  logMessage,
  productCategories,
  remoteLink,
  userStatus,
} from "utils/constants";
import { create, findProductByCode, update } from "services/ProductService";
import Loader from "components/Loader";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { forEach } from "lodash";
import Edit from "@mui/icons-material/Edit";
import ProductImage from "components/ProductImage";
// FORM FIELDS VALIDATION SCHEMA

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  categories: yup.array().required("At least one category is required!"),
  images: yup.array(),
  description: yup.string().required("Description is required!"),
  stock: yup.number().required("Stock is required!"),
  price: yup.number().required("Price is required!"),
  brand: yup.string().optional(),
  size: yup.string().optional(),
  discount: yup.number().optional(),
  tags: yup.string().required("Tags is required!"),
  description: yup.string().required("Description is required!"),
});
// ================================================================

// ================================================================
export default function ProductForm({ product }) {
  const { currentUser } = useSelector((state) => state.user);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [initialValues, setInitialeValues] = useState(product);

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const uploadImage = async (image) => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "shapshap");

    console.log("upload image formData >> ", formData);

    const uploadResponse = await fetch(remoteLink.COULDINARY_UPLOAD_LINK, {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadResponse.json();

    return uploadData.secure_url;
  };

  const handleFormSubmit = async (values) => {
    values = { ...values, owner: currentUser._id };
    let imagesUrls = values.images;

    setIsLoading(true);

    if (file1) {
      const newUrl = await uploadImage(file1);
      if (imagesUrls.length > 0) {
        imagesUrls[0] = newUrl;
      } else {
        imagesUrls = [newUrl];
      }
    }
    if (file2) {
      const newUrl = await uploadImage(file2);
      if (imagesUrls.length > 1) {
        imagesUrls[1] = newUrl;
      } else {
        imagesUrls = [...imagesUrls, newUrl];
      }
    }

    if (file3) {
      const newUrl = await uploadImage(file3);
      if (imagesUrls.length > 2) {
        imagesUrls[2] = newUrl;
      } else {
        imagesUrls = [...imagesUrls, newUrl];
      }
    }

    if (imagesUrls.length > 0) {
      // If there is new uploaded images we add it to the product
      values = { ...values, images: imagesUrls };
    }

    if (values.images.length === 0) {
      setMessage({
        content: "At least one image is required for the product",
        color: "red",
      });
      setIsLoading(false);
    } else {
      if (values._id) {
        const res = await update(values);

        if (res.error) {
          setMessage({ content: res.error, color: "red" });
          setIsLoading(false);
        } else {
          setMessage({
            content: "Product updated with success !",
            color: "green",
          });

          router.push("/vendor/products");
        }
      } else {
        const res = await create(values);

        if (res.error) {
          setMessage({ content: res.error, color: "red" });
          setIsLoading(false);
        } else {
          setMessage({
            content: "Product created with success !",
            color: "green",
          });

          router.push("/vendor/products");
        }
      }
    }
  };

  return (
    <Card className="p-3">
      {currentUser.status !== userStatus.VALIDATED ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MessageAlert
            message={{
              content:
                "You should update your account sesttings before editing a product.",
              color: "red",
            }}
          />
          <Link href="/vendor/account-settings">
            <span style={{ textDecoration: "underline" }}>
              account settings
            </span>
          </Link>
        </div>
      ) : (
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={VALIDATION_SCHEMA}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <MessageAlert message={message} />

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    color="info"
                    size="medium"
                    placeholder="Name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.name && errors.name}
                    error={Boolean(touched.name && errors.name)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    select
                    fullWidth
                    color="info"
                    size="medium"
                    name="categories"
                    onBlur={handleBlur}
                    placeholder="categories"
                    onChange={handleChange}
                    value={values.categories}
                    label="Select Category"
                    SelectProps={{
                      multiple: true,
                    }}
                    error={Boolean(touched.categories && errors.categories)}
                    helperText={touched.categories && errors.categories}
                  >
                    {productCategories.map((pro) => (
                      <MenuItem key={pro} value={pro}>
                        {pro}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  {/* <DropZone onChange={(files) => handleChangeDropZone(files)} /> */}

                  <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                    <ProductImage
                      title={"Main image"}
                      image={values.images[0]}
                      handleImageChange={(img) => setFile1(img)}
                      id="img1"
                    />
                    <ProductImage
                      title={""}
                      image={values.images[1]}
                      handleImageChange={(img) => setFile2(img)}
                      id="img2"
                    />
                    <ProductImage
                      title={""}
                      image={values.images[2]}
                      handleImageChange={(img) => setFile3(img)}
                      id="img3"
                    />
                  </FlexBox>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    rows={6}
                    multiline
                    fullWidth
                    color="info"
                    size="medium"
                    name="description"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Description"
                    value={values.description}
                    helperText={touched.description && errors.description}
                    error={Boolean(touched.description && errors.description)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="stock"
                    color="info"
                    type="number"
                    size="medium"
                    label="Stock"
                    placeholder="Stock"
                    onBlur={handleBlur}
                    value={values.stock}
                    onChange={handleChange}
                    helperText={touched.stock && errors.stock}
                    error={Boolean(touched.stock && errors.stock)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="tags"
                    label="Tags"
                    color="info"
                    size="medium"
                    placeholder="Tags"
                    onBlur={handleBlur}
                    value={values.tags}
                    onChange={handleChange}
                    helperText={touched.tags && errors.tags}
                    error={Boolean(touched.tags && errors.tags)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="price"
                    color="info"
                    size="medium"
                    type="number"
                    onBlur={handleBlur}
                    value={values.price}
                    label="Price (USD)"
                    onChange={handleChange}
                    placeholder="Price"
                    helperText={touched.price && errors.price}
                    error={Boolean(touched.price && errors.price)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="brand"
                    color="info"
                    size="medium"
                    type="text"
                    onBlur={handleBlur}
                    value={values.brand}
                    label="Brand"
                    onChange={handleChange}
                    placeholder="product brand"
                    helperText={touched.brand && errors.brand}
                    error={Boolean(touched.brand && errors.brand)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="size"
                    color="info"
                    size="medium"
                    type="text"
                    onBlur={handleBlur}
                    value={values.size}
                    label="Size"
                    onChange={handleChange}
                    placeholder="product size"
                    helperText={touched.size && errors.size}
                    error={Boolean(touched.size && errors.size)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="discount"
                    color="info"
                    size="medium"
                    type="number"
                    onBlur={handleBlur}
                    value={values.discount}
                    label="Discount %"
                    onChange={handleChange}
                    placeholder="Discount"
                    helperText={touched.discount && errors.discount}
                    error={Boolean(touched.discount && errors.discount)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <Button variant="contained" color="info" type="submit">
                      Save product
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      )}
    </Card>
  );
}
