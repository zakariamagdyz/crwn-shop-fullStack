import "./cartDropdown.styles.scss";
import CustomBtn from "../custom-btn/customBtn.component";
import CartElement from "../cart-element/cartElement";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems, handleDropdown, navigateTo }) => {
  return (
    <div className="drop-down-container">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartElement key={cartItem.id} {...cartItem} />
        ))
      ) : (
        <p className="cart-title">your cart is empty</p>
      )}
      <div className="drop-down-footer">
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps)(CartDropdown);
