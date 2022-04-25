import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";
import { MdOutlineSort } from "react-icons/md";
import PhotoFeed from "./PhotoFeed";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen  hidden sm:block">
        <ProfileSideBar />
      </div>

      <div className="w-full h-screen">
        <div className="flex justify-center w-full ">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className="flex justify-between mt-2">
              <div className="bg-gray-100 p-2 rounded-full ">
                <input
                  type="text"
                  className="p-2 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between w-full mt-10">
              <p className="text-xl font-semibold my-5 text-neutral-600">
                Photo Feed
              </p>
              <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
                <p>SORT BY </p>
                <MdOutlineSort className=" text-sm my-auto" />
              </p>
            </div>
            <StoreBar />
            <div className="flex justify-between w-full mt-10">
              <p className="text-xl font-semibold my-5 text-neutral-600">
                Photo Feed
              </p>
              <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
                <p>SORT BY </p>
                <MdOutlineSort className=" text-sm my-auto" />
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[26rem] h-fit overflow-y-scroll scrollbar-thumb-neutral-400 scrollbar-thin ">
              <PhotoFeed />
              <PhotoFeed />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-10">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]"></div>
        </div>
      </div>
    </div>
  );
}
