import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeStyle = css`
  border-left: 3px solid #eee;
  & > * {
    transform: translateX(5px);
  }
`;

export const StyledSideBar = styled.div`
  background-color: var(--secondary-color);
  color: white;
  width: 25%;
  padding: 2rem 0;
  font-size: 1.4rem;
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  letter-spacing: 0.1rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  color: white;
  & > * {
    transition: transform 0.2s ease;
    backface-visibility: hidden;
  }
  svg {
    margin-right: 1rem;
  }

  &:hover {
    ${activeStyle}
  }

  &.active {
    ${activeStyle}
  }
`;
