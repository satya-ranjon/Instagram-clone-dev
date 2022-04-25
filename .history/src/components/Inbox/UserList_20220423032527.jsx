import { Avatar } from "@mui/material";
import React from "react";

export default function UserList() {
  return (
    <div className="flex py-2 px-4 cursor-pointer transition-all duration-300 hover:bg-neutral-100 justify-between text-neutral-600">
      <div className=" my-auto flex space-x-3">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className=" cursor-pointer"
        />
        <div className="">
          <p className=" font-semibold text-indigo-800 text-md ">Khokon dev</p>
          <p className=" text-[11px]">hellow😍</p>
        </div>
      </div>
      <p className="font-semibold text-sm my-auto">3.30</p>
    </div>
  );
}
