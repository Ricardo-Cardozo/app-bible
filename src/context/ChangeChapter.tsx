import React, { createContext, useEffect, useState } from "react";
import { IGetChapter, useFetchData } from "../hooks/useFetchData";
import { useGetAbbrev } from "../hooks/useGetAbbrev";

const initialData: IGetChapter = {
  data: {
    book: {
      name: "",
    },
    chapter: {
      number: 1,
      verses: 1,
    },
    verses: [
      {
        number: 1,
        text: "",
      },
    ],
  },
};

export const ChangeChapterContext = createContext({
  handleGetChapter: (number) => {},
  chapterNumber: 1,
  data: initialData,
  isLoading: null,
  error: null,
  abbrev: "gn",
  getAbbrev: (newAbbrev: string) => {},
});

export const ChangeChapterProvider = ({ children }) => {
  const [chapterNumber, setChapterNumber] = useState(1);
  const { getData, data, isLoading, error } = useFetchData();
  const [abbrev, setAbbrev] = useState("gn");

  console.log("Retorno 2 do abbrev: ", abbrev);

  useEffect(() => {
    async function readData() {
      await getData(`verses/nvi/${abbrev}/${chapterNumber}`);
    }
    readData();
  }, [chapterNumber, abbrev]);

  const handleGetChapter = (number) => {
    setChapterNumber(number);
    console.log("Atualizando número do capítulo para", number);
  };

  const getAbbrev = (newAbbrev) => {
    setAbbrev(newAbbrev);
  };

  return (
    <ChangeChapterContext.Provider
      value={{
        chapterNumber,
        handleGetChapter,
        data,
        isLoading,
        error,
        abbrev,
        getAbbrev,
      }}
    >
      {children}
    </ChangeChapterContext.Provider>
  );
};
