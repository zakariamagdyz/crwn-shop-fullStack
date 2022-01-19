import React from "react";
import "./collectionItem.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../cart-item/cartSlice";
import CustomBtn from "../custom-btn/customBtn.component";

const CollectionItem = ({ item, handleAddToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <div className="collection-btn">
        <CustomBtn onClick={() => handleAddToCart(item)}>add to cart</CustomBtn>
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleAddToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToprops)(CollectionItem);
