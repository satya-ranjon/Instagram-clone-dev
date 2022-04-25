import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-full h-screen  bg-slate-200">
        <div className="flex justify-center w-full ">
          <div className=" md:w-[20rem]  md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <StoreBar />
          </div>
        </div>
      </div>
    </div>
  );
}
