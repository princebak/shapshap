import React from "react";

const NoData = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <img src="/assets/images/customs/no_data.png" width={"250px"} />
      <p style={{ color: "gray" }}>{message}</p>
    </div>
  );
};

export default NoData;
