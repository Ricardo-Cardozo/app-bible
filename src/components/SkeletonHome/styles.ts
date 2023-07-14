import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SkeletonSub = styled(Animated.View)`
  height: 16px;
  width: 220px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SkeletonChapter = styled(Animated.View)`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 24px;
`;

export const SkeletonSub2 = styled(Animated.View)`
  height: 16px;
  width: 140px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 8px;
`;

export const SkeletonTestament = styled(Animated.View)`
  height: 32px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 16px;
`;

export const SkeletonBook = styled(Animated.View)`
  height: 52px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 8px;
`;
