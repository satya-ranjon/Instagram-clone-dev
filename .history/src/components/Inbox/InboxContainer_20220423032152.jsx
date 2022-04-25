import { Avatar, TextField } from "@mui/material";
import React from "react";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import UserList from "./UserList";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem] overflow-y-scroll scroll-my-1  scrollbar-thumb-gray-400 scrollbar-thin">
          <div className=" w-full pt-2">
            <SearchUsers />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
          </div>
        </div>

        <MesseageBox />
      </div>
    </div>
  );
}
