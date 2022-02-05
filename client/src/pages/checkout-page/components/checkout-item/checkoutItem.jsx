import React from "react";
import { addToCart, clear, remove } from "../../../../redux/cart/cartSlice";
import { connect } from "react-redux";

import {
  Image,
  ImgContainer,
  QuantityContainer,
  Checkout,
} from "./checkoutItem.styles";

const CheckoutItem = ({ item, increase, decrease, remove }) => {
  const { name, photo, quantity, price } = item;
  return (
    <Checkout>
      <ImgContainer>
        <Image src={photo} alt={name} />
      </ImgContainer>
      <p>{name}</p>
      <QuantityContainer>
        <div onClick={() => decrease(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increase(item)}>&#10095;</div>
      </QuantityContainer>
      <p>{price}</p>
      <div onClick={() => remove(item)}>&#10005;</div>
    </Checkout>
  );
};

const mapDispatchToprops = (dispatch) => ({
  increase: (item) => dispatch(addToCart(item)),
  decrease: (item) => dispatch(remove(item)),
  remove: (item) => dispatch(clear(item)),
});
export default connect(null, mapDispatchToprops)(CheckoutItem);
