import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 2rem;
  min-width: 12rem;
  border-radius: 2rem;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  background: var(--secondary-color);
  align-self: flex-end;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.3rem 0.2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: unset;
  }
`;
