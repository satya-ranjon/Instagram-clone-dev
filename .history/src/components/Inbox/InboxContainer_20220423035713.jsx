import { Avatar, TextField } from "@mui/material";
import React from "react";
import InboxHader from "./InboxHader";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import SideBar from "./SideBar";
import UserList from "./UserList";

export default function InboxContainer() {
  return (
    <div>
      <InboxHader />
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem overflow-y-scroll scrollbar-thumb-neutral-400 scrollbar-thin">
          <SideBar />
        </div>

        <MesseageBox />
      </div>
    </div>
  );
}
