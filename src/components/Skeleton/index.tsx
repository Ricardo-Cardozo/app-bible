import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import {
  SafeArea,
  SkeletonBox,
  SkeletonChapter,
  SkeletonNumber,
  SkeletonVerse,
  SkeletonVerse2,
  SkeletonVerse3,
  SkeletonVerse4,
  SkeletonVerse5,
  VerseContainer,
} from "./styles";

export const Skeleton = () => {
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
    <SafeArea>
      <SkeletonBox style={{ opacity: opacity.current }}></SkeletonBox>
      <SkeletonChapter style={{ opacity: opacity.current }}></SkeletonChapter>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse3 style={{ opacity: opacity.current }}></SkeletonVerse3>
          <SkeletonVerse4 style={{ opacity: opacity.current }}></SkeletonVerse4>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse5 style={{ opacity: opacity.current }}></SkeletonVerse5>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse5 style={{ opacity: opacity.current }}></SkeletonVerse5>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse2 style={{ opacity: opacity.current }}></SkeletonVerse2>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse2 style={{ opacity: opacity.current }}></SkeletonVerse2>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse4 style={{ opacity: opacity.current }}></SkeletonVerse4>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse4 style={{ opacity: opacity.current }}></SkeletonVerse4>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse3 style={{ opacity: opacity.current }}></SkeletonVerse3>
        </View>
      </VerseContainer>
      <VerseContainer>
        <SkeletonNumber style={{ opacity: opacity.current }}></SkeletonNumber>
        <View style={{ flexDirection: "column" }}>
          <SkeletonVerse style={{ opacity: opacity.current }}></SkeletonVerse>
          <SkeletonVerse5 style={{ opacity: opacity.current }}></SkeletonVerse5>
        </View>
      </VerseContainer>
    </SafeArea>
  );
};
