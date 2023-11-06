import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainFont: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
