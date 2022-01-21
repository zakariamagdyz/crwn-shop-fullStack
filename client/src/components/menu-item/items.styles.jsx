import styled from "styled-components";

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.7rem 1.5rem;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &:nth-last-child(1) {
    height: 34rem;
  }

  &:nth-last-child(2) {
    height: 34rem;
  }

  &:hover {
    cursor: pointer;
    & .img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
`;

export const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: transform 2s ease;
`;

export const CategoryContent = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  text-transform: uppercase;
`;

export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSuptitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
