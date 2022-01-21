import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/svgs/shopping-bag.svg";

export const CartContainer = styled.div`
  min-width: 2.8rem;
  margin-left: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CartLogo = styled(Logo)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItemsNum = styled.span`
  margin-top: 0.4rem;
`;
