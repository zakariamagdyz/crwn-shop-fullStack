import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import withLoading from "../withLoading/withLoading";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-menu">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <MenuItem key={category.id} {...category} />
        ))
      ) : (
        <p>There are no sections to show</p>
      )}
    </div>
  );
};

export default withLoading(Directory);
