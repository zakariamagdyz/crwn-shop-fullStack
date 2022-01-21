import React, { useEffect } from "react";
import CategoryItems from "../../components/collections-categoriesItems/CategoryItems";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchACollection } from "../../redux/collection/collectionSlice.js";
import { selectCategoryName } from "../../redux/directory/directorySLice";
////////////////////////////////////////////////////////////////
// we need to handle error component while use search for diff shop route

const Collections = ({
  collectionData,
  fetchACollection,
  isLoading,
  getCategoryName,
  error,
}) => {
  const { idCollection } = useParams();

  useEffect(() => {
    fetchACollection({ categoryId: idCollection });
  }, [fetchACollection, idCollection]);

  const categoryName = getCategoryName(idCollection);

  return (
    <CategoryItems
      isLoading={isLoading}
      results={collectionData}
      error={error}
      categoryName={categoryName}
    />
  );
};

///////////////////////////////////////////////////////////////
const mapStateToProps = (state) => ({
  collectionData: state.collection.collection,
  isLoading: state.collection.isLoading,
  error: state.collection.error,
  getCategoryName: (id) => selectCategoryName(id)(state),
});

const mapDispatchToprops = (dispatch) => ({
  fetchACollection: (categoryId) => dispatch(fetchACollection(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Collections);
