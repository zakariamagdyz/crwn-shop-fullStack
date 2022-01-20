import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
import withLoading from "../withLoading/withLoading";

const CategoryItems = ({ categoryName, collectionData }) => {
  return (
    <div>
      <div>
        <h1>{categoryName}</h1>
        <div className="collection-container">
          {collectionData && collectionData.length > 0 ? (
            collectionData.map((item) => (
              <CollectionItem key={item._id} item={item} />
            ))
          ) : (
            <p>there are no items to show</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLoading(CategoryItems);
