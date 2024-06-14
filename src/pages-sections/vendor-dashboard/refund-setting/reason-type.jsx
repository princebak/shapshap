import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENT

import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box"; 
// CUSTOM DATA

const REASON_LIST = [{
  id: 1,
  title: "Ordered the wrong product"
}, {
  id: 2,
  title: "The merchant shipped the wrong product"
}, {
  id: 3,
  title: "The product is damaged or defective"
}, {
  id: 4,
  title: "The product arrived too late"
}, {
  id: 5,
  title: "The product do not match the description"
}];
export default function ReasonType() {
  const [reasonTypeList, setReasonTypeList] = useState(REASON_LIST);

  const handleDeleteReason = id => () => {
    setReasonTypeList(state => state.filter(item => item.id !== id));
  };

  const TITLE_STYLE = {
    flexGrow: 1,
    fontWeight: 600,
    border: "1px solid",
    borderRadius: "8px",
    padding: "10px 16px",
    borderColor: "grey.300"
  };
  return <Box width={{
    lg: "90%",
    xs: "100%"
  }}>
      {reasonTypeList.map(reason => <FlexBox mb={2} gap={3} key={reason.id} alignItems="center">
          <Box sx={TITLE_STYLE}>{reason.title}</Box>

          <IconButton onClick={handleDeleteReason(reason.id)} sx={{
        backgroundColor: "grey.200"
      }}>
            <Delete sx={{
          fontSize: 19,
          color: "grey.600"
        }} />
          </IconButton>
        </FlexBox>)}

      <FlexBetween mt={4}>
        <Button color="info" variant="contained">
          Update
        </Button>

        <Button color="info" variant="outlined">
          Add New
        </Button>
      </FlexBetween>
    </Box>;
}