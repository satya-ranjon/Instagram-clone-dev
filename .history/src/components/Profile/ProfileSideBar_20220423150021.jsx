import { Avatar } from "@mui/material";
import React from "react";
import ProfileSideBarHader from "./ProfileSideBarHader";

export default function ProfileSideBar() {
  return (
    <div className="w-[40rem] h-screen bg-slate-50">
      <ProfileSideBarHader />
      <div className="flex justify-center flex-col w-full">
        <div className="">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 66, height: 66 }}
          />
        </div>
      </div>
    </div>
  );
}
