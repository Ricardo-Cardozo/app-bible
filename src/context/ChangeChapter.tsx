import React, { createContext, useEffect, useState } from "react";
import { IGetChapter, useFetchData } from "../hooks/useFetchData";

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
  error: null
})

export const ChangeChapterProvider = ({ children }) => {
  const [chapterNumber, setChapterNumber] = useState(1);
  const { getData, data, isLoading, error } = useFetchData();

  useEffect(() => {
    async function readData() {
      await getData(`verses/nvi/gn/${chapterNumber}`);
    }
    readData();
  }, [chapterNumber]);

  const handleGetChapter = (number) => {
    setChapterNumber(number);
    console.log("Atualizando número do capítulo para", number);
  };

  return (
    <ChangeChapterContext.Provider
      value={{ chapterNumber, handleGetChapter, data, isLoading, error }}
    >
      {children}
    </ChangeChapterContext.Provider>
  );
};