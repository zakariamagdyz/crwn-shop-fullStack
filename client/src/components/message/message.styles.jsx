import styled from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";

export const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;
export const Header = styled.h2`
  font-size: 3rem;
  letter-spacing: 0.2rem;
  text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.error ? "red" : "#666")};

  @media ${devicesBreakpoints.tabPort} {
    font-size: 2rem;
  }
  @media ${devicesBreakpoints.mobile} {
    font-size: 1.5rem;
  }
`;
