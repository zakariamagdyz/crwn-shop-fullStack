import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error.style";

const Error = ({ message, imageUrl }) => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={imageUrl} />
      <ErrorImageText>{message}</ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default Error;
