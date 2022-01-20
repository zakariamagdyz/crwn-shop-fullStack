import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopPage from "../shop-page/shop.component";
import CollectionPage from "../collection-page/CollectionsPage";

const ShopRootPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path=":idCollection" element={<CollectionPage />} />
        <Route path="*" element={<h1>No route Defined</h1>} />
      </Routes>
    </div>
  );
};

export default ShopRootPage;

// use / means the root is the shop  (relative route)
