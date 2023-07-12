import React from "react";
import {
  ButtonNewTestament,
  ButtonOldTestament,
  Container,
  ContainerButtonTestament,
  SubTitle,
  TextNewTestament,
  TextOldTestament,
  Title,
  //ButtonContent,
  ButtonBook,
  TextBook,
  IconButton,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Title>Bem-vindo(a) à Bíblia Sagrada</Title>
      <SubTitle>Escolha um livro abaixo</SubTitle>
      <ContainerButtonTestament>
        <ButtonNewTestament>
          <TextNewTestament>Novo testamento</TextNewTestament>
        </ButtonNewTestament>
        <ButtonOldTestament>
          <TextOldTestament>Velho testamento</TextOldTestament>
        </ButtonOldTestament>
      </ContainerButtonTestament>
      <ButtonBook>
        <TextBook>Capítulo 1</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
      <ButtonBook>
        <TextBook>Capítulo 2</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
      <ButtonBook>
        <TextBook>Capítulo 3</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
      <ButtonBook>
        <TextBook>Capítulo 4</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
      <ButtonBook>
        <TextBook>Capítulo 5</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
      <ButtonBook>
        <TextBook>Capítulo 6</TextBook>
        <IconButton name="right"/>
      </ButtonBook>
    </Container>
  );
};
