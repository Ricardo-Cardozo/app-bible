import {
  Container,
  SubContainer,
  SubTitle,
  SubTitleText,
  Title,
} from "./styles";
import React, { useContext } from "react";
import { FontSizeContext } from "../../context/FontSize";
import { Verse } from "../../components/Verse";
import { FlatList, Text } from "react-native";
import Loader from "../../components/Loader";
import { Skeleton } from "../../components/Skeleton";
import { BottomSheetComponent } from "../../components/BottomSheetComponent";
import { ChangeChapterContext } from "../../context/ChangeChapter";

export const BibleReader = () => {
  const { fontSize } = useContext(FontSizeContext);
  const { chapterNumber, data, isLoading, error } = useContext(ChangeChapterContext);

  console.log("Retorno fontsize: ", fontSize);
  console.log("Resposta da requisição: ", chapterNumber);

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  if (!data.data) {
    return <Text>No data</Text>;
  }

  return (
    <Container>
      <Title>{data.data.book.name}</Title>
      <SubContainer>
        <SubTitle>Capítulo {data.data.chapter.number} - </SubTitle>
        <SubTitleText>O começo</SubTitleText>
      </SubContainer>
      <FlatList
        style={{ overflow: 'hidden' }}
        data={data.data.verses}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <Verse
            fontSize={fontSize}
            verseNumber={item.number}
            text={item.text}
          />
        )}
      />
      <BottomSheetComponent />
    </Container>
  );
};
