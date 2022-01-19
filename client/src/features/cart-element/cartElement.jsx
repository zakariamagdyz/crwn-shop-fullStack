import React from "react";
import "./cartElment.styles.scss";

const cartElement = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-element">
      <figure className="cart-element__img-container">
        <img className="cart-element__image" src={imageUrl} alt={name} />
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
