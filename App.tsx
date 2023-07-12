import React, { useCallback } from "react";
import { BibleReader } from "./src/screens/BibleReader";
import { ThemeProvider } from "./src/theme/Theme";
import { Header } from "./src/components/Header";
import { Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import {
  RobotoSerif_400Regular,
  RobotoSerif_700Bold,
} from "@expo-google-fonts/roboto-serif";
import { useFonts } from "expo-font";
import { FontSizeProvider } from "./src/context/FontSize";
import "react-native-gesture-handler";
import { BottomSheetProvider } from "./src/context/BottomSheet";
import { ChangeChapterProvider } from "./src/context/ChangeChapter";
import { Reader } from "./src/screens/Reader";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    RobotoSerif_400Regular,
    RobotoSerif_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <ChangeChapterProvider>
        <BottomSheetProvider>
          <FontSizeProvider>
            <Home />
            {/* <Reader /> */}
          </FontSizeProvider>
        </BottomSheetProvider>
      </ChangeChapterProvider>
    </ThemeProvider>
  );
}
