import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/shopping-bag.svg";
import { selectItemsCount } from "../cart-item/cartSlice";

import { connect } from "react-redux";
import "./cartItems.styles.scss";

const CartItem = ({ itemsNumber, handleDropdown }) => {
  return (
    <div className="cart-container" onClick={handleDropdown}>
      <Logo className="logo" />
      <span className="cart-nums">{itemsNumber}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsNumber: selectItemsCount(state),
});

export default connect(mapStateToProps)(CartItem);
