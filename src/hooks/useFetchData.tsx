import React, { useState } from "react";
import api from "../utils/api";

export interface IGetChapter {
  data: {
    book: {
      name: string;
    };
    chapter: {
      number: number;
      verses: number;
    },
    verses: [
      {
        number: number;
        text: string;
      }
    ];
  };
}

export const useFetchData = () => {
  const [data, setData] = useState<IGetChapter>({} as IGetChapter);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData(url: string) {
    setIsLoading(true);
    setError(null);
    try {
      const response: IGetChapter = await api.get(url);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  return { getData, data, isLoading, error };
};
