import styled from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";

export const CollectionImage = styled.div`
  height: 95%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
`;

export const Collectionfooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;
export const CollectionBtnContainer = styled.div`
  position: absolute;
  bottom: 15%;
  width: 100%;
  text-align: center;
  transition: all 0.5s ease-in-out;
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;

  @media ${devicesBreakpoints.tabPort} {
    transition: unset;
    transform: unset;
    opacity: 0.8;
    visibility: unset;
  }
`;

export const CollectionContainer = styled.div`
  width: 24%;
  height: 35rem;
  position: relative;
  //flex-grow: 1;

  &:hover {
    cursor: pointer;
    ${CollectionImage} {
      opacity: 0.6;
    }

    ${CollectionBtnContainer} {
      opacity: 1;
      visibility: visible;
      transform: translate(0);
    }
  }
  @media ${devicesBreakpoints.tabPort} {
    width: 48%;

    &:hover {
      cursor: pointer;
      ${CollectionImage} {
        opacity: 1;
      }

      ${CollectionBtnContainer} {
        opacity: 1;
      }
    }
  }
`;
