import { AntDesign } from '@expo/vector-icons'; 
import { styled } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  margin-bottom: 16px;
`;

export const ButtonChangeChapter = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const IconButton = styled(AntDesign)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
