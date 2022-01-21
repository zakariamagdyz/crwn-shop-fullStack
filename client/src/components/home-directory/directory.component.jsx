import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import isDataFetched from "../isDataFetched/isDataFetched";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ results: categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <MenuItem key={category.id} {...category} />
      ))}
    </DirectoryContainer>
  );
};

export default isDataFetched(Directory);
