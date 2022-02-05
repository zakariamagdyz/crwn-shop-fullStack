import React, { useEffect } from "react";
import CategoryItems from "./components/categoriesItems/CategoryItems";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryChilds } from "../../redux/directory/directoryAsyncActions";
////////////////////////////////////////////////////////////////
// we need to handle error component while use search for diff shop route

const Collections = ({
  categoryChilds,
  getCategoryChilds,

  isLoading,
  error,
}) => {
  const { idCollection } = useParams();

  useEffect(() => {
    getCategoryChilds({ categoryId: idCollection });
  }, [getCategoryChilds, idCollection]);

  return (
    <CategoryItems
      isLoading={isLoading}
      data={categoryChilds}
      error={error}
      errorMessage="No category found with that ID! Please try again :)"
    />
  );
};

///////////////////////////////////////////////////////////////
const mapStateToProps = (state) => ({
  categoryChilds: state.directory.categoryWithChilds,
  isLoading: state.directory.isLoading,
  error: state.directory.error,
});

const mapDispatchToprops = (dispatch) => ({
  getCategoryChilds: (categoryId) => dispatch(fetchCategoryChilds(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Collections);
