import React, { useContext, useEffect, useState } from "react";
import {
  ButtonNewTestament,
  ButtonOldTestament,
  Container,
  ContainerButtonTestament,
  TextNewTestament,
  TextOldTestament,
  ButtonBook,
  TextBook,
  IconButton,
  SubTitle,
  ButtonLastBook,
  TextLastBook,
  ViewFlag,
  SubLastBook,
} from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { FlatList, View } from "react-native";
import { Flag } from "../../components/Flag";
import { IGetBooks, useFetchData } from "../../hooks/useFetchData";
import { Skeleton } from "../../components/Skeleton";
import { useNavigation } from "@react-navigation/native";
import { useGetAbbrev } from "../../hooks/useGetAbbrev";
import { ChangeChapterContext } from "../../context/ChangeChapter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "../../theme/Theme";
import { ThemeType } from "../../theme/Theme";
import { SkeletonHome } from "../../components/SkeletonHome";

export const Home = () => {
  const { error, data, getData, isLoading } = useFetchData<IGetBooks>();
  const [changeTestament, setChangeTestament] = useState(true);
  const { theme } = useContext(ThemeContext);
  const { getAbrrevAndChangePage } = useGetAbbrev();
  const { getAbbrev } = useContext(ChangeChapterContext);
  const [lastReading, setLastReading] = useState(null);
  const navigation: any = useNavigation();

  useEffect(() => {
    async function fetch() {
      await getData("books");
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetchLastReading() {
      const reading = await loadLastReading();
      setLastReading(reading);
    }
    fetchLastReading();
  }, []);

  const handleNewTestament = () => {
    setChangeTestament(false);
  };
  const handleOldTestament = () => {
    setChangeTestament(true);
  };

  const loadLastReading = async () => {
    try {
      const value = await AsyncStorage.getItem("@last_reading");
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
    } catch (e) {
      // read error
      console.error(e);
    }
  };

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
      <HeaderHome />
      {isLoading ? (
        <SkeletonHome />
      ) : (
        <Container>
          <SubTitle>Continue de onde parou</SubTitle>
          <ButtonLastBook
            onPress={() => {
              if (lastReading) {
                getAbbrev(lastReading.bookAbbrev);
                //handleGetChapter(lastReading.chapterNumber);
                navigation.navigate("BibleReader");
              }
              console.log(lastReading.bookAbbrev);
            }}
          >
            <View>
              <TextLastBook>
                {lastReading?.bookName || "Nenhum livro lido ainda"}
              </TextLastBook>
              <SubLastBook>Capítulo {lastReading?.chapterNumber}</SubLastBook>
            </View>
            <ViewFlag>
              <Flag />
            </ViewFlag>
          </ButtonLastBook>
          <SubTitle>Ou escolha um livro:</SubTitle>
          <ContainerButtonTestament>
            <ButtonOldTestament onPress={handleOldTestament}>
              <TextOldTestament>Velho testamento</TextOldTestament>
            </ButtonOldTestament>
            <ButtonNewTestament onPress={handleNewTestament}>
              <TextNewTestament>Novo testamento</TextNewTestament>
            </ButtonNewTestament>
          </ContainerButtonTestament>
          {changeTestament ? (
            <>
              <FlatList
                style={{ overflow: "hidden" }}
                data={
                  data &&
                  (data as any).filter((item) => item.testament === "VT")
                }
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <ButtonBook
                    onPress={() => {
                      //getAbrrevAndChangePage(navigation, item.abbrev.pt);
                      getAbbrev(item.abbrev.pt);
                      navigation.navigate("BibleReader");
                    }}
                  >
                    <TextBook>{item.name}</TextBook>
                    <IconButton name="right" />
                  </ButtonBook>
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
            </>
          ) : (
            <>
              <FlatList
                style={{ overflow: "hidden" }}
                data={
                  data &&
                  (data as any).filter((item) => item.testament === "NT")
                }
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <ButtonBook
                    onPress={() => {
                      //getAbrrevAndChangePage(navigation, item.abbrev.pt)
                      getAbbrev(item.abbrev.pt);
                      navigation.navigate("BibleReader");
                    }}
                  >
                    <TextBook>{item.name}</TextBook>
                    <IconButton name="right" />
                  </ButtonBook>
                )}
              />
              <LinearGradient
                colors={[fadeStartColor, fadeEndColor]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 100,
                }}
              />
            </>
          )}
        </Container>
      )}
    </>
  );
};
