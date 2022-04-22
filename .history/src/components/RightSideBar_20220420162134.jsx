import React, { useEffect, useState } from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

export default function RightSideBar() {
  const [griddesign, setGriddesign] = useState("");

  useEffect(() => {
    const GridChange = (grid) => {
      console.log(grid);
      const cat = localStorage.getItem("grid");
      switch (grid) {
        case "THREE":
          if (cat === "grid-cols-3") {
            setGriddesign("grid-cols-3");
          } else {
            localStorage.setItem("grid", "grid-cols-3");
          }

        case "ONE":
          if (cat === "grid-cols-1") {
            setGriddesign("grid-cols-1");
          } else {
            localStorage.setItem("grid", "grid-cols-1");
          }
        default:
          if (cat === "grid-cols-2") {
            setGriddesign("grid-cols-2");
          } else {
            localStorage.setItem("grid", "grid-cols-2");
          }
      }
    };
    GridChange("TWO");
  }, []);

  // console.log(griddesign);
  const cat = localStorage.getItem("grid");
  console.log(griddesign);

  return (
    <div className=" fixed h-[400px] right-10 top-[35%] text-2xl text-gray-500 flex justify-between  flex-col ">
      <div className=" space-y-9">
        <BsGrid3X3Gap
          onClick={() => GridChange("THREE")}
          className="text-gray-500 cursor-pointer"
        />
        <BsGrid
          onClick={() => GridChange("TWO")}
          className="text-gray-500  cursor-pointer"
        />
        <SplitscreenIcon
          onClick={() => {
            GridChange("ONE");
          }}
          sx={{ fontSize: 25 }}
          className="text-gray-500  cursor-pointer"
        />
      </div>
      <VscDiffAdded className="text-4xl cursor-pointer text-[rgb(176,81,81)]" />
    </div>
  );
}
