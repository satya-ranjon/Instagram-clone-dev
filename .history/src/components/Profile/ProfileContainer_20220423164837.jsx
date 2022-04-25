import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-full h-screen  bg-slate-200">
        <div className=" w-[50rem]">
          <StoreBar />
        </div>
      </div>
    </div>
  );
}
