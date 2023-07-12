import React, { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { dark } from "./dark";
import { light } from "./light";
import { StatusBar } from "expo-status-bar";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

const themes = {
  dark: dark,
  light: light,
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }

  console.log(theme);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        <StatusBar style={theme === ThemeType.light ? 'dark' : 'light' } />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
