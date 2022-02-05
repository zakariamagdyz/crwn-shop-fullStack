import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../Spinner/spinner";
import Error from "../Error/errorComponent";
import RequireAuth from "../require-auth/RequireAuth";

const HomePage = lazy(() => import("../../pages/home-page/homepage"));
const SignInSignOut = lazy(() =>
  import("../../pages/signs-page/SignInSignUpPage")
);
const ProfilePage = lazy(() => import("../../pages/profile-page/profilePage"));
const CheckoutPage = lazy(() =>
  import("../../pages/checkout-page/checkoutPage")
);
const ProfileSettings = lazy(() =>
  import("../../pages/profile-page/components/profile-settings/profileSettings")
);

const ShopPage = lazy(() => import("../../pages/shop-page/shop.component"));
const CollectionPage = lazy(() =>
  import("../../pages/collection-page/CollectionsPage")
);

const RouterConfig = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop">
          <Route index element={<ShopPage />} />
          <Route path="items" element={<ShopPage />} />
          <Route path=":idCollection" element={<CollectionPage />} />
        </Route>
        <Route path="/signin" element={<SignInSignOut />} />
        <Route element={<RequireAuth />}>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="profile" element={<ProfilePage />}>
            <Route index element={<ProfileSettings />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

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
  );
};

export default RouterConfig;
