import React, { useContext, useRef } from "react";
import {
  Container,
  ButtonBack,
  ButtonChapter,
  TextButton,
  IconBack,
  IconSize,
  IconDark,
  IconButtonZoom,
  IconButtonMode,
} from "./styles";
import { View } from "react-native";
import { ThemeContext } from "../../theme/Theme";
import { FontSizeContext } from "../../context/FontSize";
import { BottomSheetContext } from "../../context/BottomSheet";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { increaseFontSize } = useContext(FontSizeContext);
  const { handlePresentModal } = useContext(BottomSheetContext);

  const navigation: any = useNavigation();

  return (
    <Container>
      <ButtonBack
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <IconBack name="arrow-back-outline" />
        <TextButton>Voltar</TextButton>
      </ButtonBack>
      <ButtonChapter onPress={handlePresentModal}>
        <TextButton>Trocar capítulo</TextButton>
      </ButtonChapter>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <IconButtonZoom onPress={increaseFontSize}>
          <IconSize name="font" />
        </IconButtonZoom>
        <IconButtonMode onPress={toggleTheme}>
          <IconDark name="theme-light-dark" />
        </IconButtonMode>
      </View>
    </Container>
  );
};
