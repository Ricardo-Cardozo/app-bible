import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundHeader: string;
      textColor: string;
      secondaryText: string;
      buttonText: string;
    };
    fonts: {
      regular: string;
      bold: string;
      regularSerif: string;
      boldSerif: string;
    };
  }
}
