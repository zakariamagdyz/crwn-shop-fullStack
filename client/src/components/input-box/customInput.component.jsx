import React from "react";
import { StyledLabel, StyledInput, InputGroup } from "./input.styels";

const CustomInput = ({ handleChange, label, ...others }) => {
  return (
    <InputGroup className="group">
      <StyledInput className="form-input" onChange={handleChange} {...others} />

      {label && <StyledLabel value={others.value.length}>{label}</StyledLabel>}
    </InputGroup>
  );
};

export default CustomInput;
