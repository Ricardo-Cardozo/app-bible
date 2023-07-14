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
    };
    verses: [
      {
        number: number;
        text: string;
      }
    ];
  };
}

export interface IGetBooks {
  data: [
    {
      name: string;
      //testament: string;
    }
  ];
}

export const useFetchData = <P = any,>() => {
  const [data, setData] = useState<P>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData(url: string) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get<P>(url);
      setData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  return { getData, data, isLoading, error };
};
