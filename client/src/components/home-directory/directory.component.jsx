import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import withLoading from "../withLoading/withLoading";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <MenuItem key={category.id} {...category} />
        ))
      ) : (
        <p>There are no sections to show</p>
      )}
    </DirectoryContainer>
  );
};

export default withLoading(Directory);
