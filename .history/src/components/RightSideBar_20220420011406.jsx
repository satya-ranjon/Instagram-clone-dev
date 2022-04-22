import React from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { GrGrid } from "react-icons/gr";
import { FiGrid } from "react-icons/fi";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
export default function RightSideBar() {
  return (
    <div className=" fixed h-[600px] w-10 bg-red-50 right-10 top-[25%] text-2xl text-gray-500">
      <BsGrid3X3Gap />
      <BsGrid />
      <SplitscreenIcon sx={{ fontSize: 25 }} className="text-gray-500" />
    </div>
  );
}
