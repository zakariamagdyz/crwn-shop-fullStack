import React from "react";

import { Container, ImageContainer, Content } from "./cart.styles";
const cartElement = ({ name, photo, price, quantity }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={photo} alt={name} />
      </ImageContainer>
      <Content>
        <span>{name}</span>
        <span>
          {quantity} X {price}
        </span>
      </Content>
    </Container>
  );
};

export default React.memo(cartElement);
