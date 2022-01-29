import { lazy, Suspense, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { isSignedIn } from "../../redux/auth/authAsyncActions";
import Spinner from "../../components/Spinner/spinner";
import Error from "../../components/Error/errorComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
/////////////////// import components ////////////////////////////
import { GlobalStyle } from "./globalStyle";
import Header from "../../components/header/header.component";
const HomePage = lazy(() => import("../home-page/homepage"));
const ShopRootPage = lazy(() => import("../shop-root-page/shopCollection"));
const SignInSignOut = lazy(() => import("../signs-page/SignInSignUpPage"));
const CheckoutPage = lazy(() => import("../checkout-page/checkoutPage"));
/////////////////////////////////////////////////////////////////////////////

function App({ isLoggedIn, checkForUser }) {
  // check if user is logged in and fetch app data from backend
  useEffect(() => {
    checkForUser();
  }, [checkForUser]);

  /// return Jsx
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Header isLoggedIn={isLoggedIn} />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopRootPage />} />
          <Route
            path="/signin"
            element={
              isLoggedIn ? <Navigate replace to="/" /> : <SignInSignOut />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<div>hola</div>} />
          <Route
            path="*"
            element={
              <Error
                message="Sorry, This page is not found"
                imageUrl="https://i.imgur.com/Q2BAOd2.png"
              />
            }
          />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkForUser: () => dispatch(isSignedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
