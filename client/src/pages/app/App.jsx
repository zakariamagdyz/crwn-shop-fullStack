import { lazy, Suspense, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { fetchCategories } from "../../redux/directory/directoryAsyncActions";
import { isSignedIn } from "../../redux/auth/authAsyncActions";
import Spinner from "../../components/Spinner/spinner";
/////////////////// import components ////////////////////////////
import { GlobalStyle } from "./globalStyle";
import Header from "../../components/header/header.component";
const HomePage = lazy(() => import("../home-page/homepage"));
const ShopRootPage = lazy(() => import("../shop-root-page/shopCollection"));
const SignInSignOut = lazy(() => import("../signs-page/SignInSignUpPage"));
const CheckoutPage = lazy(() => import("../checkout-page/checkoutPage"));

/////////////////////////////////////////////////////////////////////////////

function App({ isLoggedIn, getCategories, checkForUser }) {
  // check if user is logged in and fetch app data from backend
  useEffect(() => {
    checkForUser();
    getCategories();
  }, [getCategories, checkForUser]);

  /// return Jsx
  return (
    <Fragment>
      <GlobalStyle />
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
          <Route path="*" element={<h1>No route Defined</h1>} />
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
    handleSignIn: (user) => dispatch(user),
    getCategories: () => dispatch(fetchCategories()),
    checkForUser: () => dispatch(isSignedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
