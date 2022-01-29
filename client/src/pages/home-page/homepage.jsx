import React, { useEffect } from "react";
import Directory from "../../components/home-directory/directory.component";
import { HomePageStyle } from "./homepage.style";
import { connect } from "react-redux";
import { fetchCategories } from "../../redux/directory/directoryAsyncActions";

//////////////////////////////////////////
const HomePage = ({ isLoading, categories, getCategory }) => {
  useEffect(() => {
    getCategory();
  }, [getCategory]);
  return (
    <HomePageStyle>
      <Directory isLoading={isLoading} data={categories} />
    </HomePageStyle>
  );
};

const mapStateToProps = (state) => ({
  categories: state.directory.categories,
  isLoading: state.directory.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
