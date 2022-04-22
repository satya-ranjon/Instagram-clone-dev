import React from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
export default function RightSideBar() {
  return (
    <div className=" fixed h-[400px]  bg-red-50 right-10 top-[35%] text-2xl text-gray-500 space-y-9">
      <BsGrid3X3Gap className="text-gray-500 cursor-pointer" />
      <BsGrid className="text-gray-500  cursor-pointer" />
      <SplitscreenIcon
        sx={{ fontSize: 25 }}
        className="text-gray-500  cursor-pointer"
      />
      <VscDiffAdded />
    </div>
  );
}
