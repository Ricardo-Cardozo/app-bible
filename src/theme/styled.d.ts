import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundHeader: string;
      textColor: string;
      secondaryText: string;
      buttonText: string;
      headerHome: string;
      borderHeaderHome: string;
      textHeader: string;
      borderDarkMode: string;
      backgroundTestament: string;
      flag: string;
      borderButtons: string;
      textNewTestament: string;
      textOldTestament: string;
    };
    fonts: {
      regular: string;
      bold: string;
      regularSerif: string;
      boldSerif: string;
    };
  }
}
