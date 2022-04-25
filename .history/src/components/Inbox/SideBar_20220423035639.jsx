import React from "react";
import SearchBar from "../SearchBar";
import UserList from "./UserList";

export default function SideBar() {
  return (
    <div className=" w-full pt-20 relative">
      <SearchBar />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
    </div>
  );
}
