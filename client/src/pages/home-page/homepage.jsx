import { HomePageStyle } from "./homepage.style";
import React from "react";
import Directory from "../../components/home-directory/directory.component";
import { connect } from "react-redux";

//////////////////////////////////////////
const HomePage = ({ isLoading, categories }) => {
  return (
    <HomePageStyle>
      <Directory isLoading={isLoading} categories={categories} />
    </HomePageStyle>
  );
};

const mapStateToProps = (state) => ({
  categories: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(HomePage);
