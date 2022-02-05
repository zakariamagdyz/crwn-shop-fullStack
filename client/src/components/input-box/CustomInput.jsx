import React from "react";
import { StyledLabel, StyledInput, InputGroup } from "./input.styels";
import { useField } from "formik";

const CustomInput = ({ label, ...others }) => {
  const [field, meta] = useField(others);
  return (
    <InputGroup>
      <StyledInput {...field} {...others} />
      {label && <StyledLabel value={field.value}>{label}</StyledLabel>}

      {meta.error && meta.touched && <span>{meta.error}</span>}
    </InputGroup>
  );
};

export default CustomInput;
