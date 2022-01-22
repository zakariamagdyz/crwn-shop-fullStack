import React from "react";
import { Container, Header } from "./message.styles";

const EmptyResults = ({ children }) => {
  return (
    <Container>
      <Header>{children}</Header>
    </Container>
  );
};

export default EmptyResults;
