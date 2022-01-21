import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
import withLoading from "../withLoading/withLoading";

import {
  ItemsContainer,
  CategoryContainer,
  CategoryTitle,
} from "./category.style";

const CategoryItems = ({ categoryName, collectionData }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <ItemsContainer className="collection-container">
        {collectionData && collectionData.length > 0 ? (
          collectionData.map((item) => (
            <CollectionItem key={item._id} item={item} />
          ))
        ) : (
          <p>there are no items to show</p>
        )}
      </ItemsContainer>
    </CategoryContainer>
  );
};

export default withLoading(CategoryItems);
