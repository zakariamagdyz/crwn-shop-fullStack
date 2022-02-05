import React from "react";
import { connect } from "react-redux";
import { selectItems, selectTotalPrice } from "../../redux/cart/cartSlice";
import CheckoutItem from "./components/checkout-item/checkoutItem";
import { Checkout, CheckoutHeader, CheckoutTotal } from "./checkout.styles";

const checkoutPage = ({ checkoutItems, totalPrice }) => {
  return (
    <Checkout>
      <CheckoutHeader>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </CheckoutHeader>
      {checkoutItems.map((item) => (
        <CheckoutItem key={item._id} item={item} />
      ))}

      <CheckoutTotal>TOTAL : {totalPrice} $</CheckoutTotal>
    </Checkout>
  );
};

const mapStateToProps = (state) => ({
  checkoutItems: selectItems(state),
  totalPrice: selectTotalPrice(state),
});
export default connect(mapStateToProps)(checkoutPage);
