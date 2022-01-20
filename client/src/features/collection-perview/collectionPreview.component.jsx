import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
import "./collectionPerview.styles.scss";

const CollectionPreview = ({ name, shopItems }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{name.toUpperCase()}</h1>
      <div className="preview">
        {shopItems.slice(0, 4).map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
