import { styled } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.headerHome};
  width: 100%;
  padding: 24px;
  height: 120px;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`
  background-color: transparent;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.textHeader};
  padding: 6px 12px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonChapter = styled.TouchableOpacity`
  background-color: transparent;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.textHeader};
  padding: 6px 12px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.textHeader};
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const IconBack = styled(Ionicons)`
  font-size: 16px;
  margin-right: 6px;
  color: ${({ theme }) => theme.colors.textHeader};
`;

export const IconSize = styled(Icon)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textHeader};
`;

export const IconDark = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textHeader};
`;

export const IconButtonZoom = styled.TouchableOpacity`
  background-color: transparent;
  padding: 6px;
`;

export const IconButtonMode = styled.TouchableOpacity`
  background-color: transparent;
  padding: 6px;
`;