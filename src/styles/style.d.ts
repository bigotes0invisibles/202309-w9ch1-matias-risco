import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      titleFont: string;
      mainFont: string;
      backgroud: string;
      cardContainer: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
