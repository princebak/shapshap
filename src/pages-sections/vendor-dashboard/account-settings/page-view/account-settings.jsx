"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
// DATA

import countryList from "data/countryList";
// LOCAL CUSTOM COMPONENT

import CoverPicSection from "../cover-pic-section";
import PageWrapper from "../../page-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MessageAlert from "components/MessageAlert";
import Loader from "components/Loader";
import { updateUser } from "services/UserService";
import { loginSuccess } from "redux/slices/userSlice";
import { remoteLink } from "utils/constants";
import { useSession } from "next-auth/react";

export default function AccountSettingsPageView() {
  const dispatch = useDispatch();
  const { data: session, update } = useSession();
  const { currentUser: userInStore } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(userInStore);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [shopProfileImage, setShopProfileImage] = useState(null);
  const [userProfileUrl, setUserProfileUrl] = useState(
    currentUser?.profilPicUrl
  );
  const [shopProfileUrl, setShopProfileUrl] = useState(
    currentUser?.shop.profilPicUrl
  );

  const initialValues = {
    _id: currentUser?._id,
    name: currentUser?.name,
    email: currentUser?.email,
    phone: currentUser?.phone,
    address: currentUser?.address,
    profilPicUrl: currentUser?.profilPicUrl,
    country: currentUser?.country,
    shopName: currentUser?.shop?.name,
    shopPhone: currentUser?.shop?.phone,
    shopDescription: currentUser?.shop?.description,
    shopAddress: currentUser?.shop?.address,
    shopProfilPicUrl: currentUser?.shop?.profilPicUrl,
  };

  // User Profile FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    address: yup.string().required("Address is required"),
    //  country: yup.string().required("Country is required"),
    //  profilPicUrl: yup.string().required("User profil picture is required"),
    phone: yup.number().required("Phone is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    shopName: yup.string().required("Shop's name is required"),
    shopPhone: yup.number().required("Shop's phone is required"),
    shopDescription: yup.string().required("Shop's description is required"),
    shopAddress: yup.string().required("Shop's address is required"),
    shopProfilPicUrl: yup.string(),
    // .required("Shop's profil picture is required"),
  });

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

  // Handling submition method
  const submitForm = async (values) => {
    setIsLoading(true);
    if (userProfileImage) {
      const userProfileImageUrl = await uploadImage(userProfileImage);

      values = { ...values, profilPicUrl: userProfileImageUrl };
    }
    if (shopProfileImage) {
      const shopProfileImageUrl = await uploadImage(shopProfileImage);

      values = { ...values, shopProfilPicUrl: shopProfileImageUrl };
    }

    const res = await updateUser({
      ...values,
      shop: {
        name: values.shopName,
        phone: values.shopPhone,
        description: values.shopDescription,
        address: values.shopAddress,
        profilPicUrl: values.shopProfilPicUrl,
      },
    });

    if (res.error) {
      setMessage({ content: res.error, color: "red" });
    } else {
      setMessage({
        content: "User updated with success !",
        color: "green",
      });
      await update({
        ...session,
        user: {
          ...res,
        },
      });

      setCurrentUser(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(loginSuccess(currentUser));
  }, [currentUser]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const handleUserProfileImageChange = (img) => {
    const imageTargetElement = document.getElementById("userProfileImage");

    if (img) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageTargetElement.src = e.target.result;
      };
      reader.readAsDataURL(img);
    }
    setUserProfileImage(img);
  };

  const handleShopProfileImageChange = (img) => {
    const imageTargetElement = document.getElementById("shopProfileImage");
    if (img) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageTargetElement.style.background = `url(${e.target.result}) center/cover`;
      };
      reader.readAsDataURL(img);
    }
    setShopProfileImage(img);
  };
  return (
    <PageWrapper title="Account Settings">
      <Card className="p-2">
        <CoverPicSection
          userProfileUrl={userProfileUrl}
          shopProfileUrl={shopProfileUrl}
          handleUserProfileImageChange={(img) =>
            handleUserProfileImageChange(img)
          }
          handleShopProfileImageChange={(img) =>
            handleShopProfileImageChange(img)
          }
        />
        <MessageAlert message={message} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <input type="hidden" name="_id" value={values._id} />
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                name="name"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                name="email"
                type="email"
                label="Email"
                size="medium"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                disabled
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="tel"
                color="info"
                size="medium"
                name="phone"
                label="Phone"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
            </Grid>

            {/*   <Grid item md={6} xs={12}>
              <Autocomplete
                fullWidth
                disablePortal
                options={countryList}
                value={values.country}
                getOptionLabel={(option) => option.label}
                onChange={(_, value) => setFieldValue("country", value)}
                renderInput={(params) => (
                  <TextField
                    color="info"
                    label="Country"
                    variant="outlined"
                    placeholder="Select Country"
                    error={!!touched.country && !!errors.country}
                    helperText={touched.country && errors.country}
                    {...params}
                    size="medium"
                  />
                )}
              />
            </Grid> */}

            <Grid item md={12} xs={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                name="address"
                label="User address"
                color="info"
                size="medium"
                onBlur={handleBlur}
                value={values.address}
                onChange={handleChange}
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <hr style={{ border: "solid 0.5px #eee" }} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="shopName"
                label="Shop name"
                color="info"
                size="medium"
                onBlur={handleBlur}
                value={values.shopName}
                onChange={handleChange}
                error={!!touched.shopName && !!errors.shopName}
                helperText={touched.shopName && errors.shopName}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="shopPhone"
                label="Shop phone"
                color="info"
                size="medium"
                onBlur={handleBlur}
                value={values.shopPhone}
                onChange={handleChange}
                error={!!touched.shopPhone && !!errors.shopPhone}
                helperText={touched.shopPhone && errors.shopPhone}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                name="shopDescription"
                label="Shop description"
                color="info"
                size="medium"
                onBlur={handleBlur}
                value={values.shopDescription}
                onChange={handleChange}
                error={!!touched.shopDescription && !!errors.shopDescription}
                helperText={touched.shopDescription && errors.shopDescription}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                name="shopAddress"
                label="Shop address"
                color="info"
                size="medium"
                onBlur={handleBlur}
                value={values.shopAddress}
                onChange={handleChange}
                error={!!touched.shopAddress && !!errors.shopAddress}
                helperText={touched.shopAddress && errors.shopAddress}
              />
            </Grid>

            <Grid item xs={12}>
              {isLoading ? (
                <Loader />
              ) : (
                <Button type="submit" variant="contained" color="info">
                  Save Changes
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Card>
    </PageWrapper>
  );
}
