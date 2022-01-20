import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import CollectionItem from "../collection-item/collectionItem.component";
import { fetchACollection } from "../collections/collectionSlice.js";
import { selectCategoryName } from "../directory/directorySLice";
import "./Collections.styles.scss";

// we need to handle error component while use search for diff shop route

const Collections = ({
  collectionData,
  fetchACollection,
  isLoading,
  getCategoryName,
}) => {
  const { idCollection } = useParams();
  useEffect(() => {
    fetchACollection({ categoryId: idCollection });
  }, [fetchACollection, idCollection]);

  //if (!collectionData) throw new Error("wrong route");

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : collectionData && collectionData.length > 0 ? (
        <div>
          <h1>{getCategoryName(idCollection)}</h1>
          <div className="collection-container">
            {collectionData.map((item) => (
              <CollectionItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <p>there are no items to show</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionData: state.collection.collection,
  isLoading: state.collection.isLoading,
  getCategoryName: (id) => selectCategoryName(id)(state),
});

const mapDispatchToprops = (dispatch) => ({
  fetchACollection: (categoryId) => dispatch(fetchACollection(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Collections);
