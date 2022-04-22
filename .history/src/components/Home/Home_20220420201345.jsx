import React, { useEffect, useState } from "react";
import RightSideBar from "../RightSideBar";
import PostList from "./PostList";

export default function Home() {
  const [griddesign, setGriddesign] = useState("");
  const [imgdesign, setImgdesign] = useState("");

  useEffect(() => {
    const cat = localStorage.getItem("grid");
    if (!cat) localStorage.setItem("grid", "grid___two");
    setGriddesign(cat);
  }, []);

  const GridChange = (grid) => {
    switch (grid) {
      case "THREE":
        setGriddesign("grid___three");
        localStorage.setItem("grid", "grid___three");
        break;
      case "TWO":
        setGriddesign("grid___two");
        localStorage.setItem("grid", "grid___two");
        break;
      case "ONE":
        setGriddesign("grid___one");
        localStorage.setItem("grid", "grid___one");
        break;
    }
  };
  return (
    <>
      <PostList griddesign={griddesign} />
      <RightSideBar GridChange={GridChange} />
    </>
  );
}
