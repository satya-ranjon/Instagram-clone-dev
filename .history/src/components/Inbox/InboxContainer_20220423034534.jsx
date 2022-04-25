import { Avatar, TextField } from "@mui/material";
import React from "react";
import MesseageBox from "./MesseageBox";
import SearchUsers from "./SearchUsers";
import UserList from "./UserList";
import { BsInstagram } from "react-icons/bs";
export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem overflow-y-scroll scrollbar-thumb-neutral-400 scrollbar-thin">
          <div className=" fixed top-0 h-20 bg-white w-full z-10 flex">
            <div className="w-96 h-full">
              <BsInstagram />
            </div>
            <div className="w-full h-full bg-red-300"></div>
          </div>
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
