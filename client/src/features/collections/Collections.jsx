import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import CollectionItem from "../collection-item/collectionItem.component";
import { selectCollectionItem } from "../shop-page/shopSlice";
import "./Collections.styles.scss";

// we need to handle error component while use search for diff shop route

const Collections = ({ collectionData }) => {
  const { idCollection } = useParams();
  const products = collectionData(idCollection);
  if (!collectionData) throw new Error("wrong route");

  return (
    <div>
      <h1>{idCollection}</h1>
      <div className="collection-container">
        {products.items.map((collection) => (
          <CollectionItem key={collection.id} item={collection} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionData: (id) => selectCollectionItem(id)(state),
});

export default connect(mapStateToProps)(Collections);
