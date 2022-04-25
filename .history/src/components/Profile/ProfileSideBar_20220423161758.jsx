import { Avatar } from "@mui/material";
import React from "react";
import ProfileSideBarHader from "./ProfileSideBarHader";

export default function ProfileSideBar() {
  return (
    <div className="w-[40rem] h-screen bg-slate-50">
      <ProfileSideBarHader />
      <div className="py-10 px-8">
        <div className="flex items-center flex-col text-neutral-600 space-y-5">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 66, height: 66 }}
          />
          <div className=" font-semibold text-center">
            <p className=" text-xl">Amy Yane</p>
            <p className=" text-[12px] text-neutral-400">Dhaka BN</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="text-center">
              <p>0</p>
              <p>Post</p>
            </div>
            <div className="text-center">
              <p>0</p>
              <p>Follower</p>
            </div>
            <div className="text-center">
              <p>0</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
