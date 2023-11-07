import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::after,
::before{
  box-sizing: border-box;
}

h1,
h2{

  margin: 0;
  padding: 0;
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

body{
  font-family:${({ theme }) => theme.typography.mainFontFamily};
  color:  ${({ theme }) => theme.color.mainFont};
  background-color: ${({ theme }) => theme.color.backgroud};
  };

`;

export default GlobalStyle;
