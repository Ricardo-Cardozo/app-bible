import React, { useState } from "react";

export const useGetAbbrev = () => {
  const [abbrev, setAbbrev] = useState("");

  function getAbrrevAndChangePage(navigation, abbreviation) {
    navigation.navigate("Reader");
    setAbbrev(abbreviation);
    
    
  }

  console.log("Retorno Abbrev: ", abbrev);

  return { abbrev, getAbrrevAndChangePage };
};
