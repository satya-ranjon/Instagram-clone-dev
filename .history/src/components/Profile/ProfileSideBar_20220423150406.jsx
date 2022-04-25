import { Avatar } from "@mui/material";
import React from "react";
import ProfileSideBarHader from "./ProfileSideBarHader";

export default function ProfileSideBar() {
  return (
    <div className="w-[40rem] h-screen bg-slate-50">
      <ProfileSideBarHader />
      <div className="py-10">
        <div className="flex items-center flex-col text-neutral-600">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 66, height: 66 }}
          />
          <p className=" font-semibold text-xl">Amy Yane</p>
          <p className=" font-semibold text-[12px]">Dhaka BN</p>
        </div>
      </div>
    </div>
  );
}
