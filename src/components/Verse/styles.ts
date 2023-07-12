import { styled } from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  flex: 1;
`;

export const VerseNumber = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-right: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const VerseContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;