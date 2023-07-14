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
import { Home } from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

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
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="BibleReader" component={BibleReader} />
              </Stack.Navigator>
            </NavigationContainer>
          </FontSizeProvider>
        </BottomSheetProvider>
      </ChangeChapterProvider>
    </ThemeProvider>
  );
}
