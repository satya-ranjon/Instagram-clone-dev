import { Avatar, TextField } from "@mui/material";
import React from "react";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import UserList from "./UserList";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]">
          <div className=" w-full p-2 px-4">
            <SearchUsers />
                           <UserList />
                           for( var i= 0, i < 10 i++){}
          </div>
        </div>

        <MesseageBox />
      </div>
    </div>
  );
}
