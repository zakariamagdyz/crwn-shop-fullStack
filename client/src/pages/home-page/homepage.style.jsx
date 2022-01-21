import styled from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";

export const HomePageStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;

  @media ${devicesBreakpoints.mobile} {
    padding: 2rem 1rem;
  }
`;
