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

export const BottomSheetComponent = () => {
  const { bottomSheetModalRef, snapPoints } = useContext(BottomSheetContext);
  const { chapterNumber, handleGetChapter, data, isLoading, error } = useContext(ChangeChapterContext);

  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  if (!data.data) {
    return <Text>No data</Text>;
  }

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
          data={data.data.verses}
          keyExtractor={(item) => item.number.toString()}
          renderItem={({ item }) => (
            <ButtonChangeChapter onPress={() => handleGetChapter(item.number)}>
              <TextButton>Capítulo {item.number}</TextButton>
              <IconButton name="right" />
            </ButtonChangeChapter>
          )}
        />
      </Container>
    </BottomSheetModal>
  );
};
