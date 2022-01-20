import React from "react";
import "./checkoutItem.styles.scss";
import { addToCart, clear, remove } from "../../redux/cart/cartSlice";
import { connect } from "react-redux";

const CheckoutItem = ({ item, increase, decrease, remove }) => {
  const { name, photo, quantity, price } = item;
  return (
    <div className="checkout-item">
      <figure className="checkout-item__img-container">
        <img src={photo} alt={name} className="checkout-item__img" />
      </figure>
      <p className="checkout-item__name">{name}</p>
      <div className="checkout-item__quantity-container">
        <div onClick={() => decrease(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increase(item)}>&#10095;</div>
      </div>
      <p className="checkout-item__price">{price}</p>
      <div className="checkout-item__remove" onClick={() => remove(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  increase: (item) => dispatch(addToCart(item)),
  decrease: (item) => dispatch(remove(item)),
  remove: (item) => dispatch(clear(item)),
});
export default connect(null, mapDispatchToprops)(CheckoutItem);
