import { Avatar } from "@mui/material";
import React from "react";
import ProfileSideBarHader from "./ProfileSideBarHader";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProfileSideBar() {
  return (
    <div className=" border-r-2 h-screen">
      <ProfileSideBarHader />
      <div className="py-10 px-8">
        <div className="flex items-center flex-col text-neutral-600 space-y-5 text-center">
          <button className="button__btn flex space-x-2 absolute bottom-32">
            <FiLogOut className="my-auto" />
            <p> Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
