import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CategoryContainer,
  CategoryContent,
  CategoryImage,
  ContentTitle,
  ContentSuptitle,
} from "./items.styles";

const MenuItem = ({ _id, name, photo }) => {
  const navigate = useNavigate();
  return (
    <CategoryContainer onClick={() => navigate(`shop/${_id}`)}>
      <CategoryImage imageUrl={photo} className="img"></CategoryImage>
      <CategoryContent className="content">
        <ContentTitle>{name}</ContentTitle>
        <ContentSuptitle>Shop Now</ContentSuptitle>
      </CategoryContent>
    </CategoryContainer>
  );
};

export default MenuItem;
