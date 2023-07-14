import React, { useContext } from "react";
import { Container, IconButtonMode, IconDark, Title, ContainerHeader } from "./styles";
import { ThemeContext } from "../../theme/Theme";

export const HeaderHome = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      
      <ContainerHeader>
      <Title>Bem-vindo(a) à Bíblia Sagrada</Title>
      <IconButtonMode onPress={toggleTheme}>
        <IconDark name="theme-light-dark" />
      </IconButtonMode>
      </ContainerHeader>
      {/* <SubTitle>Escolha um livro abaixo</SubTitle> */}
    </Container>
  );
};
