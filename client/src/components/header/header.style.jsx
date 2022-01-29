import styled from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svgs/crown.svg";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  position: relative;
  margin-bottom: 2.5rem;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;

  @media ${devicesBreakpoints.mobile} {
    min-width: 40%;
  }
`;

export const HeaderLink = styled(Link)`
  padding: 2rem 1rem;
  cursor: pointer;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover:not(.logo) {
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderLogo = styled(Logo)`
  width: 7rem;

  @media ${devicesBreakpoints.tabLand} {
    width: 5rem;
  }
  @media ${devicesBreakpoints.tabPort} {
    width: 4rem;
  }
`;
