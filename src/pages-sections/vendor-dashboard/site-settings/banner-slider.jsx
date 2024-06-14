import NextImage from "next/image";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; 
// MUI ICON COMPONENT

import Clear from "@mui/icons-material/Clear"; 
// GLOBAL CUSTOM COMPONENTS

import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box"; 
// STYLED COMPONENTS

const UploadBox = styled("div")({
  width: 170,
  height: "auto",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative"
});
const StyledClear = styled(Clear)({
  top: 5,
  right: 5,
  fontSize: 14,
  color: "red",
  cursor: "pointer",
  position: "absolute"
});

const BannerSlider = () => {
  const [newFiles, setNewFiles] = useState([]);

  const handleFormSubmit = async e => {
    e.preventDefault();
    console.log(e);
  };

  const deleteNewImage = name => {
    setNewFiles(state => state.filter(item => item.name !== name));
  };

  return <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DropZone title="Drag and Drop slide image here" imageSize="upload landscape photo" onChange={files => console.log(files)} />

          {
          /* PREVIEW UPLOAD IMAGES */
        }
          {newFiles.length > 0 ? <FlexBox gap={1} mt={2}>
              {newFiles.map((file, index) => <UploadBox key={index}>
                  <NextImage width={240} height={100} objectFit="cover" src={file.preview} layout="responsive" alt="file" />
                  <StyledClear onClick={() => deleteNewImage(file.name)} />
                </UploadBox>)}
            </FlexBox> : null}
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" color="info" variant="contained">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>;
};

export default BannerSlider;