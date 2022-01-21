import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import CustomBtn from "../custom-btn/customBtn.component";
import {
  CollectionBtnContainer,
  CollectionContainer,
  CollectionImage,
  Collectionfooter,
} from "./collectionItems.styles";

////////////////////////////////////////

const CollectionItem = ({ item, handleAddToCart }) => {
  const { name, price, photo } = item;
  return (
    <CollectionContainer className="collection-item">
      <CollectionImage imageUrl={photo}></CollectionImage>
      <Collectionfooter className="collection-footer">
        <span>{name}</span>
        <span>{price}$</span>
      </Collectionfooter>
      <CollectionBtnContainer className="collection-btn">
        <CustomBtn onClick={() => handleAddToCart(item)}>add to cart</CustomBtn>
      </CollectionBtnContainer>
    </CollectionContainer>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleAddToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToprops)(CollectionItem);
