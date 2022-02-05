import styled from "styled-components";
import devicesBreakpoints from "../../../../styles/mediaQuery";

export const SettingsContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;
  padding: 5rem 2rem;

  form {
    display: flex;
    flex-direction: column;
  }
  hr {
    margin: 3rem 0;
  }

  & div {
    margin-bottom: 3rem;
  }

  @media ${devicesBreakpoints.tabPort} {
    width: 80%;
  }

  @media ${devicesBreakpoints.mobile} {
    width: 90%;
  }
`;

export const Header = styled.h1`
  letter-spacing: 0.1rem;
  font-size: 3rem;
  text-transform: capitalize;
  margin-bottom: 3rem;
`;
