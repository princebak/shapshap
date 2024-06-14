import { Fragment } from "react";
import Button from "@mui/material/Button";
import CameraAlt from "@mui/icons-material/CameraAlt"; 
// ==============================================================


// ==============================================================
export default function UploadButton({
  id,
  style = {}
}) {
  return <Fragment>
      <label htmlFor={id}>
        <Button size="small" component="span" color="secondary" sx={{
        p: "6px",
        height: "auto",
        borderRadius: "50%",
        bgcolor: "info.100",
        ...style,
        ":hover": {
          backgroundColor: "grey.300"
        }
      }}>
          <CameraAlt fontSize="small" color="info" />
        </Button>
      </label>

      <input id={id} type="file" accept="image/*" className="hidden" onChange={e => console.log(e.target.files)} style={{
      display: "none"
    }} />
    </Fragment>;
}