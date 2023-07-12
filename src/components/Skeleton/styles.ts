import { Animated } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 28px 24px 28px 24px;
`;

export const SkeletonBox = styled(Animated.View)`
  width: 94px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  justify-content: center;
  margin: 0 auto 24px auto;
  border-radius: 8px;
`;

export const SkeletonChapter = styled(Animated.View)`
  width: 200px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const VerseContainer = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
`;

export const SkeletonNumber = styled(Animated.View)`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
  margin-right: 16px;
`;

export const SkeletonVerse = styled(Animated.View)`
  width: 300px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 3px;
`;

export const SkeletonVerse2 = styled(Animated.View)`
  width: 280px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 3px;
`;

export const SkeletonVerse3 = styled(Animated.View)`
  width: 270px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 3px;
`;

export const SkeletonVerse4 = styled(Animated.View)`
  width: 290px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 3px;
`;

export const SkeletonVerse5 = styled(Animated.View)`
  width: 150px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 6px;
  margin-bottom: 3px;
`;
