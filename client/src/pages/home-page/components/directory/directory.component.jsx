import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import withChecks from "../../../../components/withChecks/WithChecks";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ data: categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <MenuItem key={category.id} {...category} />
      ))}
    </DirectoryContainer>
  );
};

export default withChecks(Directory);
