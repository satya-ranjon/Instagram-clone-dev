import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-full h-screen  bg-slate-200">
        <div className="flex justify-center w-full">
          <div className=" w-[60rem] ">
            <StoreBar />
          </div>
        </div>
      </div>
    </div>
  );
}
