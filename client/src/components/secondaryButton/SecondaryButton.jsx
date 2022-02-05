import React from "react";
import { Button } from "./secondaryButton.styles";

const SecondaryButton = ({ children, ...others }) => {
  return <Button {...others}>{children}</Button>;
};

export default SecondaryButton;
