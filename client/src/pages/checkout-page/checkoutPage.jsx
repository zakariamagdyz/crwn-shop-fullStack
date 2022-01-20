import React from "react";
import "./checkoutPage.styles.scss";
import { connect } from "react-redux";
import { selectItems, selectTotalPrice } from "../../redux/cart/cartSlice";
import CheckoutItem from "../../components/checkout-item/checkoutItem";

const checkoutPage = ({ checkoutItems, totalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <span className="checkout__title">Product</span>
        <span className="checkout__title">Description</span>
        <span className="checkout__title">Quantity</span>
        <span className="checkout__title">Price</span>
        <span className="checkout__title">Remove</span>
      </div>
      {checkoutItems.map((item) => (
        <CheckoutItem key={item._id} item={item} />
      ))}

      <div className="checkout__total"> TOTAL : {totalPrice} $</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  checkoutItems: selectItems(state),
  totalPrice: selectTotalPrice(state),
});
export default connect(mapStateToProps)(checkoutPage);
