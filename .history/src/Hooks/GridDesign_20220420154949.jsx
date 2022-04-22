import React, { createContext, useContext, useEffect, useState } from "react";

const DesignContext = createContext();

export function useGrid() {
  return useContext(DesignContext);
}

export default function GridDesign({children,grid}) {
  const [griddesign, setGriddesign] = useState("");
  useEffect(() => {
    switch (grid) {
      case "THREE":
        return setGriddesign("grid-cols-3");
      case "ONE":
        return setGriddesign("grid-cols-1");
      default:
        return setGriddesign("grid-cols-2");
    }
  }, [grid]);

  return (
    <DesignContext.Provider value={ }>
      {children}
    </DesignContext.Provider>
  )
    
    
    ;
}
