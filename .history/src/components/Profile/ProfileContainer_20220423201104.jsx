import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen  hidden sm:block">
        <ProfileSideBar />
      </div>
      <div className="w-full h-screen">
        <div className="flex justify-center w-full ">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className=" flex justify-between">
              <p className=" text-2xl font-semibold my-5 text-neutral-600">
                Story Hightight
              </p>
              <div className="button__btn font-semibold text-[12px]">
                SORT BY
              </div>
            </div>
            <StoreBar />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className="flex justify-center">
              <p>Photo Feed</p>
              <p className="button__btn font-semibold text-[12px] ">SORT BY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
