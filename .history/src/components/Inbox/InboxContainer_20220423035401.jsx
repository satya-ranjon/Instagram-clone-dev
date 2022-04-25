import { Avatar, TextField } from "@mui/material";
import React from "react";
import IndoxHader from "./IndoxHader";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import UserList from "./UserList";

export default function InboxContainer() {
  return (
    <div>
      <IndoxHader />
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem overflow-y-scroll scrollbar-thumb-neutral-400 scrollbar-thin">
          <div className=" w-full pt-20 relative">
            <SearchUsers />
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