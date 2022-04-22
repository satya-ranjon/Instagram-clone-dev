import React, { useEffect, useState } from "react";

export default function GridDesign({ grid }) {
  const [griddesign, setGriddesign] = useState("");

  useEffect(() => {
    switch (grid) {
      case "THREE":
        return setGriddesign("");
        break;

      default:
        break;
    }
  }, []);

  return <div>GridDesign</div>;
}
