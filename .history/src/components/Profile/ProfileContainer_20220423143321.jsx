import React from "react";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-full h-screen  bg-slate-200"></div>
    </div>
  );
}
