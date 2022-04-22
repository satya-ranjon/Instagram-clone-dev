import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { GrGrid } from "react-icons/gr";

export default function RightSideBar() {
  return (
    <div className=" fixed h-[600px] w-10 bg-red-50 right-10 top-[25%] ">
      <GrGrid />
      <BsFillGridFill />
    </div>
  );
}
