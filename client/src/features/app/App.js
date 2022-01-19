import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../auth/authSlice";
import { useEffect } from "react";
import "./App.css";
import Header from "../header/header.component";
const HomePage = lazy(() => import("../home-page/homepage"));
const ShopCollection = lazy(() => import("../shop-collection/shopCollection"));
const SignInSignOut = lazy(() => import("../signs-page/SignInSignUpPage"));
const CheckoutPage = lazy(() => import("../checkout-page/checkoutPage"));

function App({ isLoggedIn, handleSignIn }) {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;
    handleSignIn(JSON.parse(user));
  }, [handleSignIn]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Suspense fallback={<div>waiting ....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopCollection />} />
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
    </>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: (user) => dispatch(signIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
