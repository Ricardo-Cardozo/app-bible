import React, { createContext, useState, useContext } from 'react';

interface FontSizeContextProps {
  fontSize: number;
  increaseFontSize: () => void;
}

export const FontSizeContext = createContext<FontSizeContextProps>({
  fontSize: 14,
  increaseFontSize: () => {},
});

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(14);
  const [isZoomed, setIsZoomed] = useState(false);

  const normalSize = 14;
  const zoomedSize = 18;

  const increaseFontSize = () => {
    if (isZoomed) {
      setFontSize(normalSize);
      setIsZoomed(false);
    } else {
      setFontSize(zoomedSize);
      setIsZoomed(true);
    }
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};