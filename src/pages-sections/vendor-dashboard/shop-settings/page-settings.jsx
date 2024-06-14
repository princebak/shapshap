import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENT

import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
export default function PageSettings() {
  const [links, setLinks] = useState([{
    id: 1,
    name: "Links",
    value: "https://www.productbanner.com"
  }]);

  const handleAddLink = () => {
    const newLink = {
      id: Date.now(),
      name: "Links",
      value: "https://www.google.com"
    };
    setLinks(state => [...state, newLink]);
  };

  const handleDeleteLink = id => () => {
    setLinks(state => state.filter(item => item.id !== id));
  };

  return <div>
      <Stack spacing={3} mb={3}>
        <DropZone onChange={files => console.log(files)} title="Main Banner (1920 x 360) *" imageSize="We had to limit height to maintian consistancy. Some device both side of the banner might cropped for height limitation." />

        <TextField select fullWidth color="info" size="medium" name="features" placeholder="Product Features" label="Product Features" defaultValue="electronics">
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
        </TextField>

        <DropZone onChange={files => console.log(files)} title="All products page banner * (Recommended size 1025x120)" imageSize="We had to limit height to maintian consistancy. Some device both side of the banner might cropped for height limitation." />
      </Stack>

      <Box mb={4}>
        {links.map(item => <FlexBox gap={2} alignItems="center" mb={2} key={item.id}>
            <TextField fullWidth color="info" size="medium" label="Links" defaultValue={item.value} />

            <Box flexShrink={0}>
              <IconButton onClick={handleDeleteLink(item.id)}>
                <Delete sx={{
              color: "grey.600"
            }} />
              </IconButton>
            </Box>
          </FlexBox>)}

        <Button color="info" variant="outlined" onClick={handleAddLink}>
          Add Link
        </Button>
      </Box>
    </div>;
}