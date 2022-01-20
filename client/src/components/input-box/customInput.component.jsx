import React from "react";
import "./customInput.styles.scss";

const CustomInput = ({ handleChange, label, ...others }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...others} />

      {label && (
        <label
          className={`form-input-label ${others.value.length ? "shrink" : ""}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
