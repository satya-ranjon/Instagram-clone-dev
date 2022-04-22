import React, { useEffect, useState } from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

export const grid = () => {};

export default function RightSideBar({ GridChange }) {
  return (
    <div className="hidden sm:block">
      <div className=" fixed  h-[400px] right-5 lg:right-10 top-[35%] text-2xl text-gray-500 flex justify-between  flex-col ">
        <div className=" space-y-9">
          <BsGrid3X3Gap
            onClick={() => GridChange("THREE")}
            className="text-gray-500 cursor-pointer hidden md:block"
          />
          <BsGrid
            onClick={() => GridChange("TWO")}
            className="text-gray-600 text-3xl  cursor-pointer"
          />
          <SplitscreenIcon
            onClick={() => GridChange("ONE")}
            sx={{ fontSize: 25 }}
            className="text-gray-500  cursor-pointer"
          />
        </div>
        <VscDiffAdded className="text-4xl cursor-pointer text-[rgb(176,81,81)]" />
      </div>
    </div>
  );
}
