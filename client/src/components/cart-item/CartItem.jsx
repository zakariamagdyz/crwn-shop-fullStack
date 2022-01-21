import React from "react";
import { selectItemsCount } from "../../redux/cart/cartSlice";
import { connect } from "react-redux";

import { CartContainer, CartLogo, CartItemsNum } from "./cart.styles";

const CartItem = ({ itemsNumber, handleDropdown }) => {
  return (
    <CartContainer onClick={handleDropdown}>
      <CartLogo />
      <CartItemsNum>{itemsNumber}</CartItemsNum>
    </CartContainer>
  );
};

const mapStateToProps = (state) => ({
  itemsNumber: selectItemsCount(state),
});

export default connect(mapStateToProps)(CartItem);
