import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen bg-slate-50 hidden sm:block">
        <ProfileSideBar />
      </div>
      <div className="w-full h-screen  bg-slate-200">
        <div className="flex justify-center w-full ">
          <div className="w-[20rem]  md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <p className=" text-2xl">Story Hightight</p>
            <StoreBar />
          </div>
        </div>
      </div>
    </div>
  );
}
