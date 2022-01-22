import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1rem;
`;
export const ImageContainer = styled.figure`
  width: 30%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;
