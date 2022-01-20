import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/svgs/crown.svg";
import CartItem from "../cart-item/CartItem";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/auth/authAsyncActions";
import "./header.styles.scss";

const Header = ({ isLoggedIn, handleSignOut }) => {
  const [toggleDropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setDropdown(!toggleDropdown);
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {isLoggedIn ? (
          <button className="option header_btn" onClick={handleSignOut}>
            SIGN OUT
          </button>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CartItem handleDropdown={handleToggleDropdown} />
      </div>

      {toggleDropdown && (
        <CartDropdown
          handleDropdown={handleToggleDropdown}
          navigateTo={navigate}
        />
      )}
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return { handleSignOut: () => dispatch(signOut()) };
};

export default connect(null, mapDispatchToprops)(Header);
