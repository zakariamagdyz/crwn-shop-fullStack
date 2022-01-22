import styled from "styled-components";

export const Checkout = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 1.5rem 0;
  font-size: 1.3rem;
  & > * {
    width: 25%;
  }
`;
export const ImgContainer = styled.figure`
  width: 23%;
  padding-right: 2%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
  div {
    cursor: pointer;
  }
`;
export const Remove = styled.div`
  width: 10%;
  padding-left: 1.5rem;
  cursor: pointer;
`;
