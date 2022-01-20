import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ _id, name, photo, size }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => navigate(`shop/${_id}`)}
    >
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
