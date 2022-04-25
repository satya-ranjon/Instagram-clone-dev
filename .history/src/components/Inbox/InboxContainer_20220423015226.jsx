import { Avatar } from "@mui/material";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]  bg-red-50"></div>
        <div className=" h-screen w-full">
          <div className=" flex justify-between p-4">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <BiInfoCircle className=" text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
