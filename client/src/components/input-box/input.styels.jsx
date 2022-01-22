import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkedLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const InputGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const StyledLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${(props) => props.value && shrinkedLabel}
`;
export const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

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
