import CustomBtn from "../custom-btn/customBtn.component";
import CartElement from "../cart-element/cartElement";
import { connect } from "react-redux";

import {
  DropdownContainer,
  DropdownTitle,
  DropdownFooter,
} from "./dropdown.styles";

const CartDropdown = ({ cartItems, handleDropdown, navigateTo }) => {
  return (
    <DropdownContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartElement key={cartItem._id} {...cartItem} />
        ))
      ) : (
        <DropdownTitle>your cart is empty</DropdownTitle>
      )}
      <DropdownFooter>
        <CustomBtn
          inverted
          onClick={() => {
            // 1- go to checkout page
            navigateTo("/checkout");
            // 2- close cart dropdown
            handleDropdown();
          }}
        >
          go to checkout
        </CustomBtn>
      </DropdownFooter>
    </DropdownContainer>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps)(CartDropdown);
