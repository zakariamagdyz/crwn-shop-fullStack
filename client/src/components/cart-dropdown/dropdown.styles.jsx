import styled from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";

export const DropdownContainer = styled.div`
  position: absolute;
  height: 28rem;
  width: 20rem;
  top: 7rem;
  right: -1rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  border: 1px solid #ccc;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  overflow: auto;
  padding: 0.5rem;
  border-radius: 2px;
  //font-size: 1.6rem;
  justify-content: space-between;

  @media ${devicesBreakpoints.tabPort} {
    height: 25rem;
    width: 18rem;
  }
`;

export const DropdownTitle = styled.p`
  text-align: center;
  margin-top: 3rem;
  text-transform: capitalize;
  color: #777;
`;

export const DropdownFooter = styled.div`
  //margin-top: auto;
  width: 100%;
  text-align: center;
  & > button {
    width: 100%;
  }
`;
