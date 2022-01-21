import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
import isDataFetched from "../isDataFetched/isDataFetched";

import { ItemsContainer, CategoryContainer } from "./category.style";
import { Title } from "../../styles/Title";

const CategoryItems = ({ categoryName, results: collectionData }) => {
  return (
    <CategoryContainer>
      <Title>{categoryName}</Title>
      <ItemsContainer className="collection-container">
        {collectionData.map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </ItemsContainer>
    </CategoryContainer>
  );
};

export default isDataFetched(CategoryItems);
