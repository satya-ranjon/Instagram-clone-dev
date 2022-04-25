import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

export default function ProfileHader() {
  return (
    <div className="flex justify-between mt-2">
      <div className="bg-gray-100 p-2 rounded-full flex px-5 ">
        <BiSearch className="text-xl my-auto text-neutral-500" />
        <input
          type="text"
          placeholder="Search"
          className="p-1 bg-transparent outline-none"
        />
      </div>
      <IoMdNotificationsOutline className="text-xl my-auto text-neutral-500 " />
    </div>
  );
}
