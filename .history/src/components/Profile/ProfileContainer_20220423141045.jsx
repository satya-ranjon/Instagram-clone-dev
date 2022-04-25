import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen bg-slate-50">
        <div className="flex justify-between px-3 p-2 text-neutral-500">
          <BiArrowBack className=" text-3xl" />
          <div className="flex space-x-3">
            <div className=" text-sm bg-neutral-300 my-auto p-1 px-3 rounded-md">
              {" "}
              Edit Profile
            </div>
            <FiMoreVertical className=" text-3xl" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-slate-200"></div>
    </div>
  );
}
