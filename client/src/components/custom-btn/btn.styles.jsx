import styled, { css } from "styled-components";

const cssBlock = { css };

const buttonStyle = cssBlock.css`
  background-color:black;
    color:white;
    border:none;

    &:hover {
     background-color:white;
    color:black;
    border:1px solid black;
    }

`;

const invertedStyle = cssBlock.css`
    background-color:white;
    color:black;
    border:1px solid black;

    &:hover{
    background-color:black;
    color:white;
    border:none
    }

`;

const googleSignInStyle = cssBlock.css`
background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getGlobalStyle = (props) => {
  if (props.isGoogleSignIn) {
    return { googleSignInStyle };
  }

  return props.inverted ? invertedStyle : buttonStyle;
};

export const StyledBtn = styled.button`
  padding: 0.8rem 2rem;
  cursor: pointer;
  font-size: 1.8rem;
  font-family: inherit;
  min-width: 80%;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;

  ${getGlobalStyle}
`;
