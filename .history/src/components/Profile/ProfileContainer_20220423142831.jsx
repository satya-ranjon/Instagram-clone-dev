import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen bg-slate-50">
        <div className="flex justify-between px-3 p-2 text-neutral-500 relative">
          <BiArrowBack className=" cursor-pointer text-3xl" />
          <div className="flex space-x-3">
            <div className="button__btn">Edit Profile</div>
            <FiMoreVertical className="cursor-pointer text-3xl" />
          </div>
          <div className=" absolute right-10 bg-neutral-600 text-neutral-100 font-semibold text-md">
            <p className="py-1 cursor-pointer hover:bg-neutral-400 px-5">
              Setting
            </p>
            <p className="py-1 cursor-pointer hover:bg-neutral-400 px-5">
              Logout
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen  bg-slate-200"></div>
    </div>
  );
}
