import React from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function RightSideBar() {
  return (
    <div className=" fixed h-[400px] right-10 top-[35%] text-2xl text-gray-500 flex justify-between  flex-col ">
      <div className=" space-y-9">
        <BsGrid3X3Gap className="text-gray-500 cursor-pointer" />
        <BsGrid className="text-gray-500  cursor-pointer" />
        <SplitscreenIcon
          sx={{ fontSize: 25 }}
          className="text-gray-500  cursor-pointer"
        />
      </div>
      <VscDiffAdded className="text-3xl text-[rgb(176,81,81)]" />
    </div>
  );
}
