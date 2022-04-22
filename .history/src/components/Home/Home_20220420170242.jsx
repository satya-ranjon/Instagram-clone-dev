import React, { useEffect, useState } from "react";
import RightSideBar from "../RightSideBar";
import PostList from "./PostList";

export default function Home() {
  const [griddesign, setGriddesign] = useState("");
  useEffect(() => {
    const cat = localStorage.getItem("grid");
    if (!cat) localStorage.setItem("grid", "grid-cols-2");
    setGriddesign(cat);
  }, []);
  console.log("khokon" + griddesign);

  const GridChange = (grid) => {
    const cat = localStorage.getItem("grid");
    switch (grid) {
      case "THREE":
        setGriddesign("grid-cols-3");
        localStorage.setItem("grid", "grid-cols-3");
        break;
      case "TWO":
        setGriddesign("grid-cols-2");
        localStorage.setItem("grid", "grid-cols-2");
        break;
      case "ONE":
        setGriddesign("grid-cols-1");
        localStorage.setItem("grid", "grid-cols-1");
        break;
    }
  };
  return (
    <div className={`grid ${griddesign} gap-4 mx-52 my-10 font-semibold`}>
      <RightSideBar GridChange={GridChange} />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
}
