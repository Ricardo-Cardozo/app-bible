import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { Container, SkeletonBook, SkeletonChapter, SkeletonSub, SkeletonSub2, SkeletonTestament } from "./styles";

export const SkeletonHome = () => {
  const opacity = useRef(new Animated.Value(0.3));
  4;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
     <Container style={{}}>
      <SkeletonSub style={{opacity: opacity.current}} />
      <SkeletonChapter style={{opacity: opacity.current}} />
      <SkeletonSub2 style={{opacity: opacity.current}} />
      <SkeletonTestament style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
      <SkeletonBook style={{opacity: opacity.current}} />
     </Container>
  );
};
