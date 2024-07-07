import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
// Local CUSTOM COMPONENT

import UploadButton from "./upload-button";
export default function CoverPicSection({
  userProfileUrl,
  shopProfileUrl,
  handleUserProfileImageChange,
  handleShopProfileImageChange,
}) {
  return (
    <Box
      mb={3}
      height="173px"
      overflow="hidden"
      borderRadius="10px"
      position="relative"
      id="shopProfileImage"
      style={{
        background: `url(${shopProfileUrl || "/assets/images/banners/banner-10.png"}) center/cover`,
      }}
    >
      <Box position="absolute" bottom={20} left={24}>
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <UploadButton
              id="profile-image"
              callback={(img) => handleUserProfileImageChange(img)}
              style={{
                bgcolor: "grey.300",
              }}
            />
          }
        >
          <img
            alt="user"
            id="userProfileImage"
            src={`${userProfileUrl || "/assets/images/faces/propic(9).png"}`}
            style={{
              width: 80,
              height: 80,
              border: "4px solid",
              borderColor: "white",
              borderRadius: "50%",
            }}
          />
        </Badge>
      </Box>

      <Box position="absolute" top={20} right={20}>
        <UploadButton
          id="cover-image"
          callback={(img) => handleShopProfileImageChange(img)}
        />
      </Box>
    </Box>
  );
}
