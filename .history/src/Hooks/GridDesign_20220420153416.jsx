import React, { useEffect, useState } from "react";

export default function GridDesign({ grid }) {
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

  return { griddesign };
}
