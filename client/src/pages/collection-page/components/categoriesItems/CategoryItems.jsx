import React from "react";
import CollectionItem from "../../../../components/collection-item/collectionItem.component";
import withChecks from "../../../../components/withChecks/WithChecks";

import { ItemsContainer, CategoryContainer } from "./category.style";
import { Title } from "../../../../styles/Title";

const CategoryItems = ({ data: collectionData }) => {
  return (
    <CategoryContainer>
      <Title>{collectionData.name}</Title>
      <ItemsContainer className="collection-container">
        {collectionData.shopItems.map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </ItemsContainer>
    </CategoryContainer>
  );
};

export default withChecks(CategoryItems);
