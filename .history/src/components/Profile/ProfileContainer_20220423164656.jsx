import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-[70rem] h-screen  bg-slate-200">
        <div className="">
          <StoreBar />
        </div>
      </div>
    </div>
  );
}
