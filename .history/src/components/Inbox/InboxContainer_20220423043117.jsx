import { Avatar, TextField } from "@mui/material";
import React from "react";
import InboxHader from "./InboxHader";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import SideBar from "./SideBar";
import UserList from "./UserList";

export default function InboxContainer() {
  return (
    <div className="mx-52">
      <InboxHader />
      <div className="flex justify-between">
        <SideBar />
        <MesseageBox />
      </div>
    </div>
  );
}
