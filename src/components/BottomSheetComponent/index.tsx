import React, { useContext } from "react";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text } from "react-native";
import { BottomSheetContext } from "../../context/BottomSheet";
import {
  ButtonChangeChapter,
  Container,
  IconButton,
  SubTitle,
  TextButton,
  Title,
} from "./styles";
import { ThemeContext, ThemeType } from "../../theme/Theme";
import Loader from "../Loader";
import { ChangeChapterContext } from "../../context/ChangeChapter";
import { LinearGradient } from "expo-linear-gradient";

export const BottomSheetComponent = () => {
  const { bottomSheetModalRef, snapPoints } = useContext(BottomSheetContext);
  const { chapterNumber, handleGetChapter, data, isLoading, error } = useContext<any>(ChangeChapterContext);

  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  if (!data) {
    return <Text>No data</Text>;
  }

  const fadeStartColor =
    theme === ThemeType.light
      ? "rgba(94, 94, 94, 0)"
      : "rgba(251, 251, 251, 0)";
  const fadeEndColor =
    theme === ThemeType.light
      ? "rgba(251, 251, 251, 1)"
      : "rgba(94, 94, 94, 1)";


  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={0}
      backgroundStyle={{
        borderRadius: 20,
        backgroundColor: `${theme === ThemeType.light ? "#FBFBFB" : "#5e5e5e"}`,
      }}
    >
      <Container>
        <Title>Trocar capítulo</Title>
        <SubTitle>Selecione abaixo o capítulo que você deseja ler</SubTitle>
        <BottomSheetFlatList
          data={data.verses as any}
          keyExtractor={(item: any) => item.number.toString()}
          renderItem={({ item }) => (
            <ButtonChangeChapter onPress={() => handleGetChapter(item.number)}>
              <TextButton>Capítulo {item.number}</TextButton>
              <IconButton name="right" />
            </ButtonChangeChapter>
          )}
        />
        <LinearGradient
            colors={[fadeStartColor, fadeEndColor]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 80,
            }}
          />
      </Container>
    </BottomSheetModal>
  );
};
