import React from "react";
import "./cartElment.styles.scss";

const cartElement = ({ name, photo, price, quantity }) => {
  return (
    <div className="cart-element">
      <figure className="cart-element__img-container">
        <img className="cart-element__image" src={photo} alt={name} />
      </figure>
      <div className="cart-element__content">
        <span>{name}</span>
        <span>
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

export default React.memo(cartElement);
