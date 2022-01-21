import styled from "styled-components";
import dvicesBreakpoints from "../../styles/mediaQuery";

export const CollectionsContainer = styled.div`
  margin-bottom: 5rem;
`;
export const CollectionTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const Perview = styled.div`
  display: flex;
  gap: 1rem;

  @media ${dvicesBreakpoints.tabPort} {
    flex-wrap: wrap;
    gap: 3rem 2rem;
  }
`;
