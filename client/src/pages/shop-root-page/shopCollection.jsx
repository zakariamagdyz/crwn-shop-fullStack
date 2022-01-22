import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopPage from "../shop-page/shop.component";
import CollectionPage from "../collection-page/CollectionsPage";
import Error from "../../components/Error/errorComponent";

const ShopRootPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path=":idCollection" element={<CollectionPage />} />
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
    </div>
  );
};

export default ShopRootPage;

// use / means the root is the shop  (relative route)
