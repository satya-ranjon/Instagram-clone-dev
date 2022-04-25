import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";
import { MdOutlineSort } from "react-icons/md";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen  hidden sm:block">
        <ProfileSideBar />
      </div>
      <div className="w-full h-screen">
        <div className="flex justify-center w-full ">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className="flex justify-between w-full">
              <p className="text-xl font-semibold my-5 text-neutral-600">
                Photo Feed
              </p>
              <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
                <p>SORT BY </p>
                <MdOutlineSort className=" text-sm my-auto" />
              </p>
            </div>
            <StoreBar />
          </div>
        </div>
        <div className="flex justify-center w-full mt-10">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <div className="flex justify-between w-full">
              <p className="text-xl font-semibold my-5 text-neutral-600">
                Photo Feed
              </p>
              <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
                <p>SORT BY </p>
                <MdOutlineSort className=" text-sm my-auto" />
              </p>
            </div>

            <div className="grid grid-cols-6">
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
              <div className=" h-20 bg-red-50 rounded-md">khokon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
