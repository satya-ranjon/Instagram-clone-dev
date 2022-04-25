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
            <div className="flex py-2 space-x-2">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className=" cursor-pointer"
              />
              <div className=" my-auto">
                <p className=" text-md font-semibold text-neutral-600">
                  Khokon dev
                </p>
                <p className=" text-neutral-600 text-[11px]">hellow😍</p>
              </div>
            </div>
          </div>
        </div>

        <MesseageBox />
      </div>
    </div>
  );
}
