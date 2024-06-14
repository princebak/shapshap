import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar"; 
// Local CUSTOM COMPONENT

import UploadButton from "./upload-button";
export default function CoverPicSection() {
  return <Box mb={3} height="173px" overflow="hidden" borderRadius="10px" position="relative" style={{
    background: "url(/assets/images/banners/banner-10.png) center/cover"
  }}>
      <Box position="absolute" bottom={20} left={24}>
        <Badge overlap="circular" anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }} badgeContent={<UploadButton id="profile-image" style={{
        bgcolor: "grey.300"
      }} />}>
          <Avatar alt="user" src="/assets/images/faces/propic(9).png" sx={{
          width: 80,
          height: 80,
          border: "4px solid",
          borderColor: "grey.100"
        }} />
        </Badge>
      </Box>

      <Box position="absolute" top={20} right={20}>
        <UploadButton id="cover-image" />
      </Box>
    </Box>;
}