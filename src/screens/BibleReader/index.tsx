import { Container, SubContainer, SubTitle, Title } from "./styles";
import React, { useContext, useEffect } from "react";
import { FontSizeContext } from "../../context/FontSize";
import { Verse } from "../../components/Verse";
import { FlatList, Text } from "react-native";
import { Skeleton } from "../../components/Skeleton";
import { BottomSheetComponent } from "../../components/BottomSheetComponent";
import { ChangeChapterContext } from "../../context/ChangeChapter";
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext, ThemeType } from "../../theme/Theme";

export const BibleReader = () => {
  const { fontSize } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);
  const { chapterNumber, data, isLoading, error } =
    useContext<any>(ChangeChapterContext);

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }
  
  if (!data) {
    return <Text>No data</Text>;
  }

  const saveLastReading = async (bookName, chapterNumber, bookAbbrev) => {
    try {
      await AsyncStorage.setItem(
        "@last_reading",
        JSON.stringify({ bookName, chapterNumber, bookAbbrev })
      );
    } catch (e) {
      // saving error
      console.error(e);
    }
  };

  useEffect(() => {
    if (data) {
      saveLastReading(data.book.name, data.chapter.number, data.book.abbrev.pt);
    }
  }, [data]);

  const fadeStartColor =
    theme === ThemeType.light
      ? "rgba(237, 237, 237, 0)"
      : "rgba(51, 51, 51, 0)";
  const fadeEndColor =
    theme === ThemeType.light
      ? "rgba(237, 237, 237, 1)"
      : "rgba(51, 51, 51, 1)";

  return (
    <>
      <Header />
      {isLoading ? (
        <Skeleton />
      ) : (
        <Container>
          <Title>{data.book.name}</Title>
          <SubContainer>
            <SubTitle>Capítulo {data.chapter.number} </SubTitle>
            {/* <SubTitleText>O começo</SubTitleText> */}
          </SubContainer>
          <FlatList
            style={{ overflow: "hidden" }}
            data={data.verses}
            keyExtractor={(item) => item.number.toString()}
            renderItem={({ item }) => (
              <Verse
                fontSize={fontSize}
                verseNumber={item.number}
                text={item.text}
              />
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
          <BottomSheetComponent />
        </Container>
      )}
    </>
  );
};
