import React, { memo } from "react";
import { VerseNumber, Text, VerseContainer } from "./styles";

export const Verse = ({ fontSize, verseNumber, text }) => {
  return (
    <VerseContainer>
      <VerseNumber style={{ fontSize }}>{verseNumber}</VerseNumber>
      <Text style={{ fontSize }}>{text}</Text>
    </VerseContainer>
  );
};
