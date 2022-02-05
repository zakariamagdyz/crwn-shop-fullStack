import styled, { css } from "styled-components";

const subColor = "#555";
const mainColor = "black";

const shrinkedLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const InputGroup = styled.div`
  position: relative;

  span {
    color: red;
  }
`;

export const StyledLabel = styled.label`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 300ms ease all;
  ${(props) => props.value && shrinkedLabel}
`;
export const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &[type="password"] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;

    & + ${StyledLabel} {
      ${shrinkedLabel}
    }
  }
`;
