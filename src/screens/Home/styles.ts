import { styled } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonBook = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-radius: 8px;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.borderButtons};
`;

export const TextBook = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const IconButton = styled(AntDesign)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerButtonTestament = styled.View`
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundTestament};
  border-radius: 8px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ButtonNewTestament = styled.TouchableOpacity`
  padding: 4px 20px;
  background-color: transparent;
`;

export const ButtonOldTestament = styled.TouchableOpacity`
  padding: 4px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-radius: 8px;
`;
export const TextNewTestament = styled.Text`
  color: ${({ theme }) => theme.colors.textOldTestament};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const TextOldTestament = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  color: ${({ theme }) => theme.colors.textNewTestament};
`;

export const ButtonLastBook = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.borderButtons};
`;

export const TextLastBook = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const SubLastBook = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const ViewFlag = styled.View`
  position: absolute;
  left: 295px;
  bottom: 45px;
`;
