import styled from "styled-components";

export const Checkout = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid darkgrey;
  font-size: 1.2rem;
  &:last-child {
    flex-basis: 20%;
  }
`;
export const CheckoutTotal = styled.div`
  margin-left: auto;
  font-size: 2rem;
`;
