import React from "react";
import "./customBtn.styles.scss";

const CustomBtn = ({ children, inverted, ...others }) => {
  return (
    <button
      className={inverted ? "custom-button inverted" : "custom-button"}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
