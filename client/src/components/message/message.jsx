import React from "react";
import { Container, Header } from "./message.styles";

const EmptyResults = ({ children, error }) => {
  return (
    <Container>
      <Header error={error}>{children}</Header>
    </Container>
  );
};

export default EmptyResults;
