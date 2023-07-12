import { styled } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 28px 24PX 28PX 24PX;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const SubContainer = styled.View`
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 16px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const SubTitleText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 16px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;
