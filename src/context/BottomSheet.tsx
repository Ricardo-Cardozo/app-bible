import React, { createContext, useRef } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";

export const BottomSheetContext = createContext({
  handlePresentModal: () => {},
  snapPoints: [],
  bottomSheetModalRef: null,
});

export const BottomSheetProvider = ({ children }) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["70%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <BottomSheetContext.Provider
      value={{ handlePresentModal, snapPoints, bottomSheetModalRef }}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    </BottomSheetContext.Provider>
  );
};
