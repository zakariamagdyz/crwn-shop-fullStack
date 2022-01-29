import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/auth/authAsyncActions";
import { selectUsername } from "../../redux/auth/authSlice";
import {
  HeaderContainer,
  HeaderLink,
  HeaderList,
  HeaderLogo,
} from "./header.style";

///////////////////////////////////////////////////////

const Header = ({ isLoggedIn, handleSignOut, userName }) => {
  const [toggleDropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setDropdown(!toggleDropdown);
  };
  return (
    <HeaderContainer>
      <HeaderLink to="/" className="logo">
        <HeaderLogo />
      </HeaderLink>
      <HeaderList>
        <HeaderLink to="/shop">SHOP</HeaderLink>
        {isLoggedIn ? (
          <Fragment>
            <HeaderLink as="div" onClick={handleSignOut}>
              SIGN OUT
            </HeaderLink>
            <HeaderLink to="/profile">{userName}</HeaderLink>
          </Fragment>
        ) : (
          <HeaderLink to="/signin">SIGN IN</HeaderLink>
        )}

        <CartItem handleDropdown={handleToggleDropdown} />
      </HeaderList>

      {toggleDropdown && (
        <CartDropdown
          handleDropdown={handleToggleDropdown}
          navigateTo={navigate}
        />
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  userName: selectUsername(state),
});

const mapDispatchToprops = (dispatch) => {
  return { handleSignOut: () => dispatch(signOut()) };
};

export default connect(mapStateToProps, mapDispatchToprops)(Header);
