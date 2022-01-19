import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopComponent from "../shop-page/shop.component";
import Collections from "../collections/Collections";

const ShopPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShopComponent />} />
        <Route path=":idCollection" element={<Collections />} />
        <Route path="*" element={<h1>No route Defined</h1>} />
      </Routes>
    </div>
  );
};

export default ShopPage;

// use / means the root is the shop  (relative route)
