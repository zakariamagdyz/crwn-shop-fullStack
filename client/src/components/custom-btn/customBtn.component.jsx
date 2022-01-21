import React from "react";
import { StyledBtn } from "./btn.styles";

const CustomBtn = ({ children, inverted, ...others }) => {
  return (
    <StyledBtn inverted={inverted} {...others}>
      {children}
    </StyledBtn>
  );
};

export default CustomBtn;
