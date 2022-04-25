import { Avatar, TextField } from "@mui/material";
import React from "react";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]">
          <div className=" w-full p-2 px-4">
            <SearchUsers />
            <div className="flex py-2 justify-between text-neutral-600">
              <div className=" my-auto flex space-x-3">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className=" cursor-pointer"
                />
                <div className="">
                  <p className=" font-semibold text-md">Khokon dev</p>
                  <p className=" text-[11px]">hellow😍</p>
                </div>
              </div>
              <p className="font-semibold text-md my-auto">3.30</p>
            </div>
          </div>
        </div>

        <MesseageBox />
      </div>
    </div>
  );
}
