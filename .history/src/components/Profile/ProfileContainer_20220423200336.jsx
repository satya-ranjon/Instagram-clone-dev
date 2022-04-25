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
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className="">

            <p className=" text-2xl font-semibold my-5 text-neutral-600">
            </div>
              Story Hightight
            </p>
            <StoreBar />
          </div>
        </div>
      </div>
    </div>
  );
}
