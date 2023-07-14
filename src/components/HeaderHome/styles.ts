import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.headerHome};
  width: 100%;
  padding: 22px 24px;
  height: 160px;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 8px solid ${({ theme }) => theme.colors.borderHeaderHome};
`;

export const ContainerHeader = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.textHeader};
  flex-wrap: wrap;
  flex-shrink: 1;
  text-align: left;
  max-width: 210px;
`;

export const IconDark = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textHeader};
`;

export const IconButtonMode = styled.TouchableOpacity`
  background-color: transparent;
  padding: 12px;
  margin-bottom: 12px;
  margin-left: 100px;
  border: 1px solid ${({ theme }) => theme.colors.textHeader};
  border-radius: 8px;
`;
