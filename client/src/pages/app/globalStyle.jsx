import { createGlobalStyle } from "styled-components";
import devicesBreakpoints from "../../styles/mediaQuery";

// we use this to pretty-print the styles
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;

    @media ${devicesBreakpoints.bigDisktop} {
      font-size: 75%;
    }

    @media ${devicesBreakpoints.tabLand} {
      font-size: 65.25%;
    }
    @media ${devicesBreakpoints.mobile} {
      font-size: 50%;
    }
  }

  body {
    box-sizing: border-box;
    font-family: "Open Sans Condensed", sans-serif;
    padding: 2rem 6rem;

    @media ${devicesBreakpoints.tabPort} {
      padding: 0.5rem 3rem;
    }

    @media ${devicesBreakpoints.mobile} {
      padding: 0.5rem 0.5rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
