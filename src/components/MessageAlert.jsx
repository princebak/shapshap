import React from "react";

const MessageAlert = ({ message }) => {
  return message ? (
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        color: message.color,
      }}
    >
      <label>{message.content}</label>
    </p>
  ) : (
    <></>
  );
};

export default MessageAlert;
