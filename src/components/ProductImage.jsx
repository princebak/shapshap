import Edit from "@mui/icons-material/Edit";
import React from "react";

const ProductImage = ({ id, title, image, handleImageChange }) => {
  const btnId = `btn${id}`;
  const handleChange = (img) => {
    const imageTargetElement = document.getElementById(id);
    if (img) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageTargetElement.src = e.target.result;
      };
      reader.readAsDataURL(img);
    }
    handleImageChange(img);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid 0.5px #eee",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "4px",
        }}
      >
        <span>{title}</span>

        <label style={{ cursor: "pointer" }} for={btnId}>
          <Edit />
        </label>
      </div>
      <img
        src={image}
        alt="Click the edit button"
        width="200px"
        height="200px"
        id={id}
      />

      <input
        type="file"
        id={btnId}
        style={{ display: "none" }}
        onChange={(e) => handleChange(e.target.files[0])}
      />
    </div>
  );
};

export default ProductImage;
