import React from "react";
import "./hompage.styles.scss";
import Directory from "../../components/home-directory/directory.component";
import { connect } from "react-redux";

const HomePage = ({ isLoading, categories }) => {
  return (
    <div className="homepage">
      <Directory isLoading={isLoading} categories={categories} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(HomePage);
