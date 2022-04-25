import { Avatar } from "@mui/material";
import React from "react";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]  bg-red-50"></div>
        <div className=" h-screen w-full bg-blue-50">
          <div className=" flex justify-between">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
