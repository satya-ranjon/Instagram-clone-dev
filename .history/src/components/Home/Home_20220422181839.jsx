import React, { useEffect, useState } from "react";
import RightSideBar from "../RightSideBar";
import PostList from "./PostList";
import NewPost from "./NewPost";
import SearchBar from "../SearchBar";

export default function Home() {
  const [griddesign, setGriddesign] = useState("");
  const [imgdesign, setImgdesign] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openSearchBar, setOpenSideBar] = React.useState(false);

  useEffect(() => {
    const gridDe = localStorage.getItem("grid");
    if (!gridDe) localStorage.setItem("grid", "grid___two");
    setGriddesign(gridDe);
    const imagDe = localStorage.getItem("imgDe");
    if (!imagDe) localStorage.setItem("imgDe", "img__two");
    setImgdesign(imagDe);
  }, []);

  const GridChange = (grid) => {
    switch (grid) {
      case "THREE":
        setGriddesign("grid___three");
        setImgdesign("img__three");
        localStorage.setItem("grid", "grid___three");
        localStorage.setItem("imgDe", "img__three");
        break;
      case "TWO":
        setGriddesign("grid___two");
        setImgdesign("img__two");
        localStorage.setItem("grid", "grid___two");
        localStorage.setItem("imgDe", "img__two");
        break;
      case "ONE":
        setGriddesign("grid___one");
        setImgdesign("img__one");
        localStorage.setItem("grid", "grid___one");
        localStorage.setItem("imgDe", "img__one");
        break;
    }
  };
  return (
    <>
      <PostList griddesign={griddesign} imgdesign={imgdesign} />
      <RightSideBar GridChange={GridChange} setOpen={setOpen} />
      <NewPost open={open} setOpen={setOpen} />
    </>
  );
}
