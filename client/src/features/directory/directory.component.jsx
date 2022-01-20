import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";

const Directory = ({ categories, isLoading }) => {
  return (
    <div className="directory-menu">
      {isLoading ? (
        <p>loading .....</p>
      ) : categories && categories.length > 0 ? (
        categories.map((category) => (
          <MenuItem key={category.id} {...category} />
        ))
      ) : (
        <p>There are no sections to show</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.directory.categories,
  isLoading: state.directory.isLoading,
});

export default connect(mapStateToProps)(Directory);
