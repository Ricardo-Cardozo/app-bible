import { styled } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Container = styled.View`
  flex: 1;
  padding: 76px 24px 24px 24px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
`;

// export const TextNewTestament = styled.Text`
//   color: ${({ theme }) => theme.colors.textColor};
//   font-size: 14px;
// `;

// export const TextOldTestament = styled.Text`
//   color: ${({ theme }) => theme.colors.textColor};
//   font-size: 14px;
// `;

export const ButtonBook = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  flex-direction: row;
`;

export const TextBook = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

// export const ContainerButtonTestament = styled.View`
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.background};
//   border-radius: 8px;
//   flex-direction: row;
//   padding: 4px;
//   margin-bottom: 16px;
// `;

// export const ButtonNewTestament = styled.TouchableOpacity`
//   flex: 1;
//   padding: 10px 12px;
//   background-color: ${({ theme }) => theme.colors.backgroundHeader};
// `;

// export const ButtonOldTestament = styled.TouchableOpacity`
//   flex: 1;
//   padding: 10px 12px;
//   background-color: transparent;
// `;

// export const ButtonContent = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

export const IconButton = styled(AntDesign)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerButtonTestament = styled.View`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ButtonNewTestament = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.buttonText};
`;

export const ButtonOldTestament = styled.TouchableOpacity`
  padding: 10px;
  background-color: transparent;
  border-radius: 4px;
`;
export const TextNewTestament = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;

export const TextOldTestament = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regularSerif};
`;
